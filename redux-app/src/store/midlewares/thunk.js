// Thunk midleware
const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") action(state);
  else next(action);
};

export default thunk;
