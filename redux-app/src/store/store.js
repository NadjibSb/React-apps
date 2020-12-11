import { configureStore } from "@reduxjs/toolkit";
import func from "./midlewares/func";
import logger from "./midlewares/logger";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer: reducer,
    middleware: [logger("console log"), func],
  });
}
