import React, { Component } from "react";
import { getGenres } from "../../services/fakeGenreService";

class ListGroup extends Component {
  state = {
    genres: getGenres(),
  };
  render() {
    const { groupeActive, onClick } = this.props;
    const active = groupeActive || 0;

    return (
      <ul className="list-group">
        <li
          key="All"
          className={
            active === 0 ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onClick(0)}
        >
          All Genres
        </li>
        {this.state.genres.map((genre) => (
          <li
            key={genre._id}
            className={
              active === genre ? "list-group-item active" : "list-group-item"
            }
            onClick={() => onClick(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
