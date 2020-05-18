import React from "react";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete } = props;

  function getFavClasses(bool) {
    return bool ? "fa fa-heart" : "fa fa-heart-o";
  }

  return (
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
