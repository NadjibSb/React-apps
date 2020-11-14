import React, { Component } from "react";

class TableHeader extends Component {
  raiseSortClick = (path) => {
    const col = { ...this.props.sortColumn };
    if (path === col.path) col.order = col.order === "asc" ? "desc" : "asc";
    else {
      col.path = path;
      col.order = "asc";
    }
    this.props.onSort(col);
  };

  renderSortIcon(path) {
    if (path !== this.props.sortColumn.path) return null;
    return this.props.sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc"></i>
    ) : (
      <i className="fa fa-sort-desc"></i>
    );
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th onClick={() => this.raiseSortClick(column.path)}>
              {column.label} {this.renderSortIcon(column.path)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
