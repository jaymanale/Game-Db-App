import ExpenseTrackerForm from "./components/expenseTracker/components/ExpenseTrackerForm";
import ExpenseList from "./components/expenseTracker/components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Apple",
      amount: 20,
      category: "grocery",
    },
    {
      id: 2,
      description: "John Wick",
      amount: 200,
      category: "Entertainment",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
