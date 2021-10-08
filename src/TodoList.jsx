import React, { useState } from "react";
import {
  atom,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";

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

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        style={{ marginLeft: "20px", marginTop: "20px" }}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  console.log({ index });
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function TodoItem({ item }) {
  const [todoList, setTodoList] = useResetRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItems = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    console.log({ newList });
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItems} />
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
        <TodoItem item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
