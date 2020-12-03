import store from "./store";
import actions from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addCard("test1"));
store.dispatch(actions.addCard("test2"));
store.dispatch(actions.archiveCard(1));

unsubscribe();

store.dispatch(actions.archiveCard(2));
