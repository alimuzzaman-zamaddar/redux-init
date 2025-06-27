import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  task: [
    {
      id: "andfldfgkl",
      title: "initiaal state",
      discription: "CREATE HOME PAGE",
      dueDate: "2025 - 11",
      isCompleted: false,
      priodity: "high",
    },
    {
      id: "andfldfgkl",
      title: "initiaal hfgfdujfdstate",
      discription: "CREATEhhhjjkikki HOME PAGE",
      dueDate: "2025 - 11",
      isCompleted: false,
      priodity: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
