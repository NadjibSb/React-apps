import React from "react";
import { Link } from "react-router-dom";
import Table from "./common/Table/table";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn: sortHeader } = props;

  const headers = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "dailyRentalRate", label: "Rate" },
    { path: "numberInStock", label: "Stock" },
    {
      key: "liked",
      content: (movie) => (
        <i
          className={getFavClasses(movie.liked)}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={() => onLike(movie)}
        ></i>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  function getFavClasses(bool) {
    return bool ? "fa fa-heart" : "fa fa-heart-o";
  }

  return (
    <Table
      headers={headers}
      data={movies}
      sortHeader={sortHeader}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
