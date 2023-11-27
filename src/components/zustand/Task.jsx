import classNames from "classnames";
import React from "react";
import { useStore } from "../../store/store";
const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDragTask = useStore((store) => store.setDraggedTask);
  const handleDragTask = () => {
    setDragTask(task.id);
  }
  return (
    <div
      className="task"
      draggable
      style={{ cursor: "move" }}
      onDragStart={handleDragTask}
    >
      <button
        className="bg-red-500 border text-white p-3"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        delete
      </button>
      <div>{task.title}</div>
      <div>
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
