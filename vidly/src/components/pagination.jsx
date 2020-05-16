import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;
    const count = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, count + 1);

    if (count <= 1) return null;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((p) => (
            <li
              key={p}
              className={p === currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" href="#" onClick={() => onPageChange(p)}>
                {p}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
