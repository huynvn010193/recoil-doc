import React, { useState } from "react";
import { atom, useRecoilValue } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId();
        text: inputValue,
        isComplete: false
      }
    ]);
  };
  return (
    <div>
      <input type="text" style={{ marginLeft: "20px", marginTop: "20px" }} />
      <button onClick={null}>Add</button>
    </div>
  );
}

function TodoItem() {
  return (
    <div>
      <input type="text" />
      <input type="checkbox" />
      <button onClick={null}>X</button>
    </div>
  );
}

const TodoList = (props) => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
