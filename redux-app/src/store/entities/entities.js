import { combineReducers } from "@reduxjs/toolkit";
import cardsReducer from "./cards";
import labelsReducer from "./labels";

export default combineReducers({
  cards: cardsReducer,
  labels: labelsReducer,
});
