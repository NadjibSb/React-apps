import configureStore from "./store/store";
import * as cardActions from "./store/cards";
import * as labelActions from "./store/labels";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cardActions.addCard({ description: "card 1" }));
store.dispatch(cardActions.addCard({ description: "card 2" }));
store.dispatch(cardActions.archiveCard({ id: 1 }));
store.dispatch(labelActions.addLabel({ description: "Label 1" }));

unsubscribe();

store.dispatch(actions.archiveCard({ id: 2 }));
