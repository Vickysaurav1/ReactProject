import Button from "./components/Button";
import Counter from "./components/Counter";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
     <ExpenseItem/>
     <Counter/>
     <Button child='+'/>
    </div>
  );
}

export default App;
