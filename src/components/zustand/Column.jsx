import React from "react";
import { v4 as uuidv4 } from "uuid";
import { shallow } from "zustand/shallow";
import { useStore } from "../../store/store";
import Task from "./Task";

const Column = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);
  const dragTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);
  const setDragTask = useStore((store) => store.setDraggedTask);
  const handleDrop = (e) => {
    e.preventDefault();
    moveTask(dragTask, state);
    setDragTask(dragTask);
  };
  return (
    <div
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center gap-3">
        <p>{state}</p>
        <button
          className="bg-blue-500 border text-white p-3"
          onClick={() => {
            addTask("new task" + state, state);
          }}
        >
          add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={uuidv4()}></Task>
      ))}
    </div>
  );
};

export default Column;
