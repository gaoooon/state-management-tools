import { create } from "zustand";

interface CountStore {
  count: number;
  increase: () => void;
  decrease: () => void;
}
export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increase: () => set(({ count }) => ({ count: count + 1 })),
  decrease: () => set(({ count }) => ({ count: count - 1 })),
}));
