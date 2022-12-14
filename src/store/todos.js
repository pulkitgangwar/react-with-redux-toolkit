import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return todos;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todos: [
      { id: "1", title: "first todo", completed: false },
      { id: "2", title: "second todo", completed: false },
    ],
    error: null,
  },
  reducers: {
    remove(state, action) {
      console.log(action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getTodos.pending](state, action) {
      state.loading = true;
    },
    [getTodos.fulfilled](state, action) {
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getTodos.rejected](state, action) {
      state.loading = false;
      state.error = "something went wrong";
    },
  },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
