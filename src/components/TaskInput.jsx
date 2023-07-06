import { useRef } from "react";

export default function TaskInput({ setTasks, tasks, setCurrentTask }) {
  const inputRef = useRef(null);

  function setTask() {
    const inputValue = inputRef.current.value;
    if (inputValue !== "") {
      const valid = tasks.find((task) => task.value === inputValue);
      if (valid && valid.key === "0") {
        inputRef.current.setCustomValidity("The task is already there!");
      } else if (valid && valid.key === "1") {
        setCurrentTask(valid.value);
      } else if(!valid) {
        localStorage.setItem(inputValue, "0");
        setTasks((prevTasks) => [...prevTasks, { value: inputValue, key: "0" }]);
      }
    } else {
      inputRef.current.setCustomValidity("You must type something!");
    }
  }

  return (
    <div className="join shadow">
      <input
        type="text"
        name="inputValue"
        placeholder="What are your plans?"
        className="input input-bordered join-item font-semibold"
        ref={inputRef}
      />
      <button
        type="button"
        className="btn join-item font-semibold"
        onClick={() => setTask()}
      >
        Add
      </button>
    </div>
  );
}
