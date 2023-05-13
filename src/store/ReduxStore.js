import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import authSlice from "./AuthSlice";

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authSlice.reducer,
  },
});

export default store;
