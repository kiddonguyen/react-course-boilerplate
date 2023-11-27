import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [
    { id: 1, title: "test task", state: "planned" },
    { id: 2, title: "test task 2", state: "ongoing" },
    { id: 3, title: "test task 3", state: "done" },
  ],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => {
      store.tasks.push({ id: Date.now(), title, state });
      return { tasks: store.tasks };
    }),
  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
  setDraggedTask: (id) => set({ draggedTask: id }),
  moveTask: (id, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, state } : task
      ),
    })),
});

export const useStore = create(
  persist(devtools(store), {
    name: "zustand-store",
    whitelist: ["tasks", "draggedTask"], // Add 'draggedTask' to the whitelist
  })
);
