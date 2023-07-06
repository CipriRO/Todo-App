import { useEffect, useState } from "react";
import CurrentTasks from "./CurrentTasks";
import DoneTasks from "./DoneTasks";

export default function DisplayTasks({ tasks }) {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    const newCurrentTasks = new Set(currentTasks);
    const newDoneTasks = new Set(doneTasks);

    tasks.forEach((task) => {
      if (task.key === '0') {
        newCurrentTasks.add(task.value);
      } else {
        newDoneTasks.add(task.value);
      }
    });

    setCurrentTasks(Array.from(newCurrentTasks));
    setDoneTasks(Array.from(newDoneTasks));
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  return (
    <div className="w-8/12">
      

      {currentTasks.length > 0 && <CurrentTasks tasks={currentTasks} />}

      

      {doneTasks.length > 0 && <DoneTasks tasks={doneTasks} />}

      <div className="divider mb-0" />
    </div>
  );
}
