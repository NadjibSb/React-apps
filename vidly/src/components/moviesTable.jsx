import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn: sortHeader } = props;

  const headers = [
    { path: "title", label: "Title" },
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
    <table className="table">
      <TableHeader headers={headers} onSort={onSort} sortHeader={sortHeader} />
      <TableBody
        data={movies}
        headers={headers}
        onLike={onLike}
        onDelete={onDelete}
      />
    </table>
  );
};

export default MoviesTable;
