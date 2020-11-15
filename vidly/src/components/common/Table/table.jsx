import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { headers, data, sortHeader, onSort } = props;
  return (
    <table className="table">
      <TableHeader headers={headers} onSort={onSort} sortHeader={sortHeader} />
      <TableBody data={data} headers={headers} />
    </table>
  );
};

export default Table;
