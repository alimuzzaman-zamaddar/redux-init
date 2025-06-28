// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../Features/counterSlice';
import taskReducer from "../Features/tasks/tasksSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer, 
    todo: taskReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
