import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoContainer todos={todos} />
    </div>
  );
};

const TodoContainer = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos &&
          todos.map(({ inputText }) => {
            return <Todo inputText={inputText} />;
          })}
      </ul>
    </div>
  );
};

const Todo = ({ inputText }) => {
console.log(inputText)
  return (
    <div className="todo">
      <li className="todo-item">{inputText}</li>
      <button>
        <i className="fas fa-check"></i>
      </button>
      <button>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

const Form = ({ setInputText, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputText !== "") {
      setTodos((prevState) => [
        ...prevState,
        {
          inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoApp;
