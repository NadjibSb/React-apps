import configureStore from "./store/store";
import { addCard, archiveCard, getArchivedCards } from "./store/entities/cards";
import { addLabel } from "./store/entities/labels";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addCard({ description: "card 1" }));
store.dispatch(addCard({ description: "card 2" }));
store.dispatch(archiveCard({ id: 1 }));
store.dispatch(addLabel({ description: "Label 1" }));
console.log(getArchivedCards(store.getState()));
unsubscribe();

store.dispatch(archiveCard({ id: 2 }));
