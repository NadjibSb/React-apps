import { createAction } from "@reduxjs/toolkit";

export const apiCall = createAction("api/call");
export const apiCallSuccess = createAction("api/callSuccess");
export const apiCallError = createAction("api/callError");
