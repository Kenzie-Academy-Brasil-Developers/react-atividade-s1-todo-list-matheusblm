function ToDoList({ list, handleToDo }) {
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleToDo(item)}>Finish</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
