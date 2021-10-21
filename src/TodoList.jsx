import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

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
