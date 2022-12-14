import { useSelector } from "react-redux";
import Todos from "./components/Todos";

function App() {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <Todos />
    </div>
  );
}

export default App;
