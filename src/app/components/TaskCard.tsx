"use client";

import { useState } from "react";

type TaskCardProps = {
  taskName: string;
  taskDescription: string;
};

export default function TaskCard({ taskName, taskDescription }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const dynamicClassName = isChecked ? "opacity-50" : "";

  return (
    <div
      className={`flow mx-auto max-w-prose rounded-md border p-8 ${dynamicClassName}`}
      id="taskCard"
    >
      <h3>{taskName}</h3>
      <p className="mb-2 text-lg">{taskDescription}</p>
      <label>
        Complete?
        <input
          type="checkbox"
          id={taskName}
          className="ml-4"
          checked={isChecked}
          onChange={checkHandler}
        />
      </label>
    </div>
  );
}
