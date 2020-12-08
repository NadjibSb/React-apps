import configureStore from "./store/store";
import * as actions from "./store/cards";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addCard("test1"));
store.dispatch(actions.addCard("test2"));
store.dispatch(actions.archiveCard(1));

unsubscribe();

store.dispatch(actions.archiveCard(2));
