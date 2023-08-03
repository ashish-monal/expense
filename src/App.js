import React, { useState } from "react";

function App() {
  const [balance, setBalance] = useState(100);
  const [transaction, setTransaction] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Add");

  const handleAddTransaction = () => {
    if (!date || amount <= 0) {
      alert("Please Enter valid Date and amount.");
      return;
    }
    setTransaction((prevTransactions) => [
      ...prevTransactions,
      {
        id: Date.now(),
        date,
        amount,
        type,
      },
    ]);
    if (type === "Add") {
      setBalance((prevBalance) => prevBalance + amount);
    } else {
      setBalance((prevBalance) => prevBalance - amount);
    }
    setDate("");
    setAmount(0);
    setType("Add");
  };
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          margin: "10px",
          textAlign: "center",
        }}
      >
        <h2>Expense Tracker - Basic</h2>
        <p>Balance : {balance}</p>
        <div>
          <h3>Enter Expense Details :</h3>
          <input
            style={{ marginRight: "10px" }}
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            style={{ marginRight: "10px" }}
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <select
            style={{ marginRight: "10px" }}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Add">Add</option>
            <option value="Remove">Remove</option>
          </select>
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
      </div>
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h3>Transaction:</h3>
        <ul>
          {transaction.map((transaction) => (
            <li key={transaction.id}>
              {transaction.date} - {transaction.amount} - {transaction.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
