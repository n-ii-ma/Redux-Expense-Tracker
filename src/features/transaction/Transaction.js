import { useDispatch } from "react-redux";
import { deleteTransaction } from "./transactionSlice";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  // Delete Transaction Function
  const handleDelete = () => dispatch(deleteTransaction(transaction));

  // Plus or Minus Sign
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount).toFixed(2)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};

export default Transaction;
