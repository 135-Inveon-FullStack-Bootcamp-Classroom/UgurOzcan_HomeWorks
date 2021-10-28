import React, { useState } from "react";
import './App.css';
import './style.css';
import Header from './Components/Header'
import Body from './Components/Body'
import ToDoList from './Components/ToDoList'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  // When buttonClick triggered, new todo items were added
  return (
    <div className="App">
      <Header />
      <Body inputValue={inputValue}
        setInputValue={setInputValue}
        buttonClick={() => {
          const myNewTodo = {
            text: inputValue,
            status: "active",
          };
          setTodos([...todos, myNewTodo]);
        }} />
        <ToDoList todos={todos} setTodos={setTodos} />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
