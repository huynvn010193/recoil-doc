import React, { useState } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} style={{ marginLeft: "20px", marginTop: "20px" }} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

function TodoItem({item}) {
  return (
    <div>
      <input type="text" value={item.text} />
      <input type="checkbox" />
      <button onClick={null}>X</button>
    </div>
  );
}

const TodoList = (props) => {
  const todoList = useRecoilValue(todoListState);
  console.log("🚀 ~ file: TodoList ~ todoList", todoList)
  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem}/>
      ))}
    </div>
  );
};

export default TodoList;
