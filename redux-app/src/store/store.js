import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./midlewares/logger";
import reducer from "./reducer";
import api from "./midlewares/api";

export default function () {
  return configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), logger("console log"), api],
  });
}
