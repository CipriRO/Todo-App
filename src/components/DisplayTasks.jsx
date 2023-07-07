import { useEffect, useState } from "react";
import CurrentTasks from "./CurrentTasks";
import DoneTasks from "./DoneTasks";
import { motion } from "framer-motion";

export default function DisplayTasks({ tasks, setTasks, setCurrentTask }) {
  const [currentTasks, setCurrentTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function removeTask(taskName) {
    localStorage.removeItem(taskName);
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.value !== taskName)
    );
  }

  useEffect(() => {
    const newCurrentTasks = [];
    const newDoneTasks = [];

    tasks.forEach((task) => {
      if (task.key === "0") {
        newCurrentTasks.push(task.value);
      } else {
        newDoneTasks.push(task.value);
      }
    });

    setCurrentTasks(Array.from(newCurrentTasks));
    setDoneTasks(Array.from(newDoneTasks));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      layout
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-8/12"
    >
      {currentTasks.length > 0 && (
        <CurrentTasks
          tasks={currentTasks}
          setTasks={setTasks}
          removeTask={removeTask}
          popupVariants={popupVariants}
        />
      )}

      {doneTasks.length > 0 && (
        <DoneTasks
          tasks={doneTasks}
          setTasks={setTasks}
          removeTask={removeTask}
          setCurrentTask={setCurrentTask}
          popupVariants={popupVariants}
        />
      )}

      <motion.div
        layout
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="divider mb-0"
      />
    </motion.div>
  );
}
