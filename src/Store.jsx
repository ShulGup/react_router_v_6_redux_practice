// import counterReducer from "./reducer";
import { createStore } from "redux";
import counterReducer from "./reducerToll";
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore(counterReducer);

export const store = configureStore({
  reducer: {
    counterValue: counterReducer,
  },
});
