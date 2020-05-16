import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteClick = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  hadleFavClick = (movie) => {
    const movies = [...this.state.movies];
    const i = movies.indexOf(movie);
    movies[i] = { ...movies[i] };
    movies[i].liked = !movies[i].liked;
    this.setState({ movies });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <i
                    className={this.getFavClasses(movie.liked)}
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.hadleFavClick(movie)}
                  ></i>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => this.handleDeleteClick(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  getFavClasses(bool) {
    return bool ? "fa fa-heart" : "fa fa-heart-o";
  }
}

export default Movies;
