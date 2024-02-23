import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increase(count) {
      return count + 1;
    },
    decrease(count) {
      return count - 1;
    },
  },
});

export default countSlice;
export const { increase, decrease } = countSlice.actions;
