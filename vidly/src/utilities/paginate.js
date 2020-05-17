import _ from "lodash";

export default function paginate(movies, currentPage, pageSize) {
  const index = (currentPage - 1) * pageSize;
  return _(movies).slice(index).take(pageSize).value();
}
