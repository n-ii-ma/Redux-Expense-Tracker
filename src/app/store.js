import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";

const preloadedState = localStorage.getItem("ReduxExpenseTracker")
  ? JSON.parse(localStorage.getItem("ReduxExpenseTracker"))
  : {};

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
  preloadedState,
});

// Save State to Local Storage
store.subscribe(() => {
  localStorage.setItem("ReduxExpenseTracker", JSON.stringify(store.getState()));
});

export default store;
