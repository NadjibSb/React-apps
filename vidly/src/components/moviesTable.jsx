import React from "react";
import TableHeader from "./common/tableHeader";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "dailyRate", label: "Rate" },
    { path: "inStock", label: "Stock" },
    {},
    {},
  ];

  function getFavClasses(bool) {
    return bool ? "fa fa-heart" : "fa fa-heart-o";
  }

  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <th>{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <i
                className={getFavClasses(movie.liked)}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                onClick={() => onLike(movie)}
              ></i>
            </td>
            <td>
              <button
                className="btn btn-sm btn-danger m-2"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
