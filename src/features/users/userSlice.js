import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Ronaldo" },
  { id: 1, name: "Jhon" },
  { id: 2, name: "lisa" },
  { id: 3, name: "Irshanda" },
];

const userSlice = createSlice({
  name: "uses",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
