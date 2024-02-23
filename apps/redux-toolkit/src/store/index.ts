import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const store = configureStore({
  reducer: { count: countSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
