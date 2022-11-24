import { configureStore } from "@reduxjs/toolkit";
import { errors, values, arrUser, valid } from "./reducers/userReducer.jsx";

export const store = configureStore({
  reducer: {
    errors: errors,
    values: values,
    arrUser: arrUser,
    valid: valid,
  },
});
