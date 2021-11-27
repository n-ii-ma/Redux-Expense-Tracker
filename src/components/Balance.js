import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transaction/transactionSlice";

const Balance = () => {
  const transactions = useSelector(selectTransactions);

  // Get the Amount of Each Transaction
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );

  // Get the Total Amount
  const total = transactionAmount.reduce((acc, item) => (acc += item), 0);

  // Minus Sign
  const sign = total < 0 && "-";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total).toFixed(2)}
      </h1>
    </div>
  );
};

export default Balance;
