import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cards";

export default function () {
  return configureStore({ reducer: reducer });
}
