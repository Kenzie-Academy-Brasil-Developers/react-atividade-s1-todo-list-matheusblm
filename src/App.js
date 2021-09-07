import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
function App() {
  const [list, setList] = useState([]);
  function addToDo(newToDo) {
    setList([...list, newToDo]);
  }
  function handleToDo(item) {
    const filtred = list.filter((element) => element !== item);
    setList(filtred);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addToDo={addToDo} />
        <ToDoList list={list} handleToDo={handleToDo} />
      </header>
    </div>
  );
}

export default App;
