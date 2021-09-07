import { useState } from "react";

function Form({ addToDo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => addToDo(userInput)}>Colocar</button>
    </>
  );
}

export default Form;
