import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop"
function App() {
  return (
    <div>
      <h1> My Todo</h1>
      <Todo text="Learn React" />
      <Todo text="Master React"/>
      <Todo text="Explore React" />
    </div>
  );
}

export default App;
