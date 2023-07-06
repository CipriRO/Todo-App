import { useState } from "react";
import "./App.css";
import DisplayTasks from "./components/DisplayTasks";
import TaskInput from "./components/TaskInput";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function setCurrentTask(taskName) {
    localStorage.setItem(taskName, "0");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.value === taskName ? { ...task, key: "0" } : task
      )
    );
  }

  function getAllDataFromLocalStorage() {
    const data = Object.keys(localStorage).map((key) => {
      return {
        key: localStorage.getItem(key),
        value: key,
      };
    });
  
    return data;
  }

  useEffect(() => {
    setTasks(getAllDataFromLocalStorage());
  }, []);

  return (
    <div className="bg-[#ffffff23] backdrop-blur py-5 px-7 gap-5 flex flex-col justify-center items-center rounded-3xl shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Welcome on my Todo App</h1>
        <h3 className="font-semibold text-lg">
          Feel free to explore and use our app to organize your tasks and make
          the most of your day!
        </h3>
      </div>

      <div className="flex flex-col gap-3 w-full items-center">
        <TaskInput setTasks={setTasks} tasks={tasks} setCurrentTask={setCurrentTask} />
        {tasks.length > 0 && <DisplayTasks tasks={tasks} setTasks={setTasks} setCurrentTask={setCurrentTask} />}
      </div>
    </div>
  );
}

export default App;
