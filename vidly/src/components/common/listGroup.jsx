import React from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
  const { items, onItemClick, textProperty, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemClick(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ListGroup;
