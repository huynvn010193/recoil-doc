import React from "react";
import { useRecoilValue } from "recoil";
import { filterTodoListState } from "./state";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = (props) => {
  const todoList = useRecoilValue(filterTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem,index) => (
        <TodoItem item={todoItem} key={index}/>
      ))}
    </div>
  );
};

export default TodoList;
