const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." required />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (Negative - Expense / Positive - Income)
          </label>
          <input type="number" placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
