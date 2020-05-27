import React from "react";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;

  function getFavClasses(bool) {
    return bool ? "fa fa-heart" : "fa fa-heart-o";
  }

  function handleSortClick(path) {
    const col = { ...sortColumn };
    if (path === col.path) col.order = col.order === "asc" ? "desc" : "asc";
    else {
      col.path = path;
      col.order = "asc";
    }

    onSort(col);
  }

  function renderSortIcon(column) {
    if (column !== sortColumn.path) return null;
    return sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSortClick("title")}>
            Title {renderSortIcon("title")}
          </th>
          <th onClick={() => handleSortClick("genre.name")}>
            Genre {renderSortIcon("genre.name")}
          </th>
          <th onClick={() => handleSortClick("numberInStock")}>
            Stock {renderSortIcon("numberInStock")}
          </th>
          <th onClick={() => handleSortClick("dailyRentalRate")}>
            Rate {renderSortIcon("dailyRentalRate")}
          </th>
          <th></th>
          <th>Action</th>
        </tr>
      </thead>
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
