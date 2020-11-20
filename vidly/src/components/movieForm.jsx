import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { genres, getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import g from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", rate: "", stock: "" },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Movie title"),
    genreId: Joi.string().required().label("Genre"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
    stock: Joi.number().min(0).max(100).required().label("Number in stock"),
  };

  componentDidMount = () => {
    const genres = getGenres();
    const movieId = this.props.match.params.id;
    let movie = getMovie(movieId);

    if (movie) {
      movie = this.mapToViewModel(movie);
      const currentGenre = genres.find((g) => g._id === movie.genreId);
      currentGenre.selected = true;
      this.setState({ genres, data: movie });
    } else {
      this.setState({ genres });
    }
  };

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      rate: movie.dailyRentalRate,
      stock: movie.numberInStock,
    };
  };

  mapToModel = (data) => {
    return {
      _id: data._id,
      title: data.title,
      genreId: data.genreId,
      dailyRentalRate: data.rate,
      numberInStock: data.stock,
    };
  };

  onSubmit = () => {
    const m = this.mapToModel(this.state.data);
    console.log(m);
    const mv = saveMovie(m);
    console.log(mv);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie {}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("stock", "Number in stock", "number")}
          {this.renderInput("rate", "Rate", "text")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
