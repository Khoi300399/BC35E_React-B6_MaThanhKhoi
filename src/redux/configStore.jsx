import { configureStore } from "@reduxjs/toolkit";
import { arrUser } from "./reducers/userReducer.jsx";

export const store = configureStore({
  reducer: {
    arrUser: arrUser,
  },
});
