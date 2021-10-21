import { useRecoilState } from "recoil";
import { todoListFilterState } from "./state";

const TodoListFilters = () => {
  const [filter,setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value }}) => {
    setFilter(value);
  }

  return <>
    <select value={filter} onChange={updateFilter} style={{ marginLeft: "20px", marginTop: "5px" }}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  </>;
};

export default TodoListFilters;
