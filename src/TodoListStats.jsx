import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./state";

const TodoListStats = () => {
  const {
    totalNum,
    totalComplete,
    totalUncompleted,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items isComplete: {totalComplete}</li>
      <li>Total not complete: {totalUncompleted}</li>
      <li>Percent complete: {formattedPercentCompleted}</li>
    </ul>
  );
}

export default TodoListStats
