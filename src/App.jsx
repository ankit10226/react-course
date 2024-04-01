import "./App.css";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

function App() {
  const expenseData = [
    { date: new Date().toDateString(), itemDesc: "asdfdasfadfdf", price: 100 },
    { date: new Date().toDateString(), itemDesc: "gjgdjsdjfgjf", price: 700 },
    { date: new Date().toDateString(), itemDesc: "mbmvckrwjabjhg", price: 200 },
  ];

  return (
    <>
      {expenseData.map((expense, index) => (
        <ExpenseItem
          id={index}
          date={expense.date}
          item={expense.itemDesc}
          price={expense.price}
        />
      ))}
    </>
  );
}

export default App;
