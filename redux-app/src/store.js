import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default {
  dispatch: store.dispatch,
  subscribe: store.subscribe,
  getState: store.getState,
};
