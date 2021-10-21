import { useRecoilState } from "recoil";
import { todoListState } from "./state";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const index = todoList.findIndex((listItem) => listItem === item);

  const editItems = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const deleteItems = () => {
    const newList = removeItemIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
      <input type="text" value={item.text} onChange={editItems} />
      <input type="checkbox" />
      <button onClick={deleteItems}>X</button>
    </div>
  );
}
