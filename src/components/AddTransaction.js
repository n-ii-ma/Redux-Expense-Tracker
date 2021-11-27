import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transaction/transactionSlice";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  // Add Transaction Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    dispatch(
      addTransaction({
        text: text,
        amount: amount,
      })
    );

    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (Negative - Expense / Positive - Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
