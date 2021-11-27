import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: [],
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        text: action.payload.text,
        amount: +action.payload.amount,
        id: uuidv4(),
      };
      state.push(newTransaction);
    },
    deleteTransaction: (state, action) => {
      return state.filter(
        (transaction) => transaction.id !== action.payload.id
      );
    },
  },
});

// Selector
export const selectTransactions = (state) => state.transaction;

// Actions
export const { addTransaction, deleteTransaction } = transactionSlice.actions;

// Reducer
export default transactionSlice.reducer;
