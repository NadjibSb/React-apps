import React from "react";

const MovieForm = ({ match, history }) => {
  function onSave() {
    history.push("/movies");
  }
  return (
    <div>
      <h1>Movie {match.params.id}</h1>
      <button className="btn btn-primary" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
