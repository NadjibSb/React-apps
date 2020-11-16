import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  state = {};

  renderCell = (item, header) => {
    if (header.content) return header.content(item);
    return _(item).get(header.path);
  };

  render() {
    const { data, headers } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {headers.map((header) => (
              <td key={item._id + (header.path || header.key)}>
                {this.renderCell(item, header)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
