import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transaction/transactionSlice";
import Transaction from "../features/transaction/Transaction";

const TransactionList = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {!transactions.length ? (
          <p>Nothing to Show</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
