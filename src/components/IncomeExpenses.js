import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transaction/transactionSlice";

const IncomeExpenses = () => {
  const transactions = useSelector(selectTransactions);

  // Get the Amount of Each Transaction
  const transactionAmount = transactions.map(
    (transaction) => transaction.amount
  );

  // Add the Positive Income Values Together
  const income = transactionAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Add the Negative Expense Values Together
  const expense = (
    transactionAmount
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
