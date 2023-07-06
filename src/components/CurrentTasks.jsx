export default function CurrentTasks({ tasks, setTasks, removeTask }) {
  function setDoneTask(taskName) {
    localStorage.setItem(taskName, "1");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.value === taskName ? { ...task, key: "1" } : task
      )
    );
  }

  return (
    <>
      <div className="divider font-semibold">Current tasks</div>

      <div className="flex flex-col items-center gap-2 w-full">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex bg-slate-200/20 items-center w-9/12 justify-between py-1 px-2 rounded-xl shadow-md"
          >
            <div className="w-4/6 flex justify-center items-center">
              <h3 className="font-semibold">{task}</h3>
            </div>
            <div className="flex gap-1 ">
              <button
                type="button"
                className="btn btn-sm btn-circle btn-success shadow"
                onClick={() => setDoneTask(task)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
              </button>

              <button
                type="button"
                className="btn btn-sm btn-circle btn-error shadow"
                onClick={() => removeTask(task)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 7h16"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <path d="m5 7 1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path>
                  <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
