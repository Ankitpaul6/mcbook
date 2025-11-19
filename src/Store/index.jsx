import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e",
  scale: 0.08,
  size: "16",

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),
  setSize: (size) => set({ size }),

  reset: () => set({ color: "#2e2c2e", scale: 0.08, size: "16" }),
}));

export default useMacbookStore;

