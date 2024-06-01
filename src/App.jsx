import "./App.css"; 
import AddToList from "./Pages/AddToList/AddToList";
import AddUser from "./Pages/AddUser/AddUser";
import ExpenseItemPage from "./Pages/ExpenseItems/ExpenseItemPage"; 
import InvestmentCalculator from "./Pages/InvestmentCalculator/InvestmentCalculator";
import UseReducer from "./Pages/UseReducer/UseReducer";
import UserLogin from "./Pages/UserLogin/UserLogin";
import { AuthContextProvider } from "./Store/auth-context";

function App() {
  return (
    <>
      {/* <ExpenseItemPage /> */}
      {/* <AddToList /> */}
      {/* <InvestmentCalculator /> */}
      {/* <AddUser /> */}
      <AuthContextProvider>
        <UserLogin />
      </AuthContextProvider>
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
