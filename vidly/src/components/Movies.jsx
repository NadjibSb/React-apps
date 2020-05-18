import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import paginate from "../utilities/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    currentGenre: { name: "All genres" },
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
    this.setState({ currentGenre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      currentPage,
      pageSize,
      currentGenre,
    } = this.state;

    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row m-5">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={currentGenre}
            onItemClick={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <MoviesTable
            movies={movies}
            onLike={this.handleFavClick}
            onDelete={this.handleDeleteClick}
          />

          <Pagination
            itemsCount={filtered.length}
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
