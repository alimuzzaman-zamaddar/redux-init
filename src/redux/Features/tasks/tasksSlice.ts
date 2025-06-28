import type { RootState } from "@/redux/store/store";
import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
  tasks: ITask[];
  filter: "all" |"high" | "medium" | "low",
}



const initialState: InitialState = {
  tasks: [
    {
      id: "andfldfgkl",
      title: "initiaal state",
      description: "CREATE HOME PAGE",
      dueDate: "2025 - 11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "andfldfgkl",
      title: "initiaal hfgfdujfdstate",
      description: "CREATEhhhjjkikki HOME PAGE",
      dueDate: "2025 - 11",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
 
});
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
}
export default taskSlice.reducer;
