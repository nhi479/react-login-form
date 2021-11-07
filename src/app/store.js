import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";

import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: [thunk, logger],
});
