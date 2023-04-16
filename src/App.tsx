import ExpenseTrackerForm from "./components/expenseTracker/components/ExpenseTrackerForm";
import ExpenseList from "./components/expenseTracker/components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/expenseTracker/components/ExpenseFilter";

export const categories = ["Grocery", "Entertainment", "Utilities"];

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Apple",
      amount: 20,
      category: "Grocery",
    },
    {
      id: 2,
      description: "John Wick",
      amount: 200,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Light Bill",
      amount: 1200,
      category: "Utilities",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseTrackerForm
          onSubmit={(expense) => {
            console.log(expense);
            setExpenses([
              ...expenses,
              {
                ...expense,
                amount: parseInt(expense.amount.toString()),
                id: expenses.length + 1,
              },
            ]);
          }}
        />
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
