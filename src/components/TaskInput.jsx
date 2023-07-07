import { useRef } from "react";
import { motion } from "framer-motion";

export default function TaskInput({ setTasks, tasks, setCurrentTask }) {
  const formRef = useRef(null);
  const inputRef = useRef(null);

  function setTask() {
    const inputValue = inputRef.current.value;
    if (inputValue !== "") {
      const valid = tasks.find((task) => task.value === inputValue);
      if (valid && valid.key === "0") {
        inputRef.current.setCustomValidity("The task you want to create already exists!");
        formRef.current.reportValidity();
      } else if (valid && valid.key === "1") {
        setCurrentTask(valid.value);
      } else if (!valid) {
        localStorage.setItem(inputValue, "0");
        setTasks((prevTasks) => [
          ...prevTasks,
          { value: inputValue, key: "0" },
        ]);
        inputRef.current.value = "";
      }
    } else {
      inputRef.current.setCustomValidity("This field is required!");
      formRef.current.reportValidity();
    }
  }

  return (
    <motion.form ref={formRef} layout className="join shadow">
      <input
        type="text"
        name="inputValue"
        placeholder="What do you need to do?"
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
    </motion.form>
  );
}
