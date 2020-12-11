import { combineReducers } from "@reduxjs/toolkit";
import entitiesReducer from "./entities/entities";

export default combineReducers({
  entities: entitiesReducer,
});
