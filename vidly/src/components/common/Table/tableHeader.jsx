import React, { Component } from "react";
import PropTypes from "prop-types";

class TableHeader extends Component {
  raiseSortClick = (path) => {
    const col = { ...this.props.sortHeader };
    if (path === col.path) col.order = col.order === "asc" ? "desc" : "asc";
    else {
      col.path = path;
      col.order = "asc";
    }
    this.props.onSort(col);
  };

  renderSortIcon(path) {
    if (path !== this.props.sortHeader.path) return null;
    return this.props.sortHeader.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.headers.map((header) => (
            <th
              key={header.path || header.key}
              onClick={() => this.raiseSortClick(header.path)}
            >
              {header.label} {this.renderSortIcon(header.path)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  headers: PropTypes.array.isRequired,
  sortHeader: PropTypes.object,
  onSort: PropTypes.func,
};

export default TableHeader;
