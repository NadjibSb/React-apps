import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import paginate from "../utilities/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchInput from "./searchInput";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    searchQuery: "",
    pageSize: 4,
    currentGenre: { name: "All genres" },
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount = () => {
    const genres = [this.state.currentGenre, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  };

  handleDeleteClick = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleFavClick = (movie) => {
    const movies = [...this.state.movies];
    const i = movies.indexOf(movie);
    movies[i] = { ...movies[i] };
    movies[i].liked = !movies[i].liked;
    this.setState({ movies });
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  handleGenreChange = (currentGenre) => {
    this.setState({ currentGenre, searchQuery: "", currentPage: 1 });
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query, currentGenre: {}, currentPage: 1 });
  };

  handleSortClick = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      currentPage,
      sortColumn,
      pageSize,
      searchQuery,
      currentGenre,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (currentGenre && currentGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === currentGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { movies, totalCount: filtered.length };
  };

  render() {
    const {
      genres,
      currentPage,
      sortColumn,
      pageSize,
      currentGenre,
      searchQuery,
    } = this.state;

    const { movies, totalCount } = this.getPagedData();

    return (
      <div className="row my-5 ">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={currentGenre}
            onItemClick={this.handleGenreChange}
          />
          <Link to="/movies/new">
            <button className="btn btn-primary my-4 w-100">New movie</button>
          </Link>
        </div>
        <div className="col-8 offset-1">
          <SearchInput value={searchQuery} onChange={this.handleSearchChange} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleFavClick}
            onDelete={this.handleDeleteClick}
            onSort={this.handleSortClick}
          />

          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
