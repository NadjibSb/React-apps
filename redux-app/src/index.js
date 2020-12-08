import configureStore from "./store/store";
import * as actions from "./store/cards";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addCard({ description: "test1" }));
store.dispatch(actions.addCard({ description: "test2" }));
store.dispatch(actions.archiveCard({ id: 1 }));

unsubscribe();

store.dispatch(actions.archiveCard({ id: 2 }));
