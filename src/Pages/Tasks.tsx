import { selectFilter, selectTasks } from "@/redux/Features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/hooks/hook";
import TaskCard from "./TaskCard";
import type { ITask } from "@/types/types";

export const Tasks = () => {

  const tasks = useAppSelector(selectTasks)
  const filter = useAppSelector(selectFilter)
  console.log(tasks);
  console.log(filter);


  return (
    <>
      {tasks.map((task: ITask) => (
      <TaskCard
        key={task.id}
        task={{
          id: task.id,
          title: task.title,
          description: task.description,
          completed: task.isCompleted // fallback if missing
        }}
      />
      ))}
    </>
  );
}