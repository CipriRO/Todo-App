import "./App.css";

function App() {
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
        <div className="join shadow">
          <input
            type="text"
            placeholder="What are your plans?"
            className="input input-bordered join-item font-semibold"
          />
          <button type="button" className="btn join-item font-semibold">
            Add
          </button>
        </div>

        <div className="w-8/12">
          <div className="divider font-semibold">Current tasks</div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex bg-slate-200/20 items-center w-9/12 justify-between py-1 px-2 rounded-xl shadow-md">
              <div className="w-4/6 flex justify-center items-center">
                <h3 className="font-semibold">Cleaning in the bathroom</h3>
              </div>
              <div className="flex gap-1 ">
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-success shadow"
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
          </div>

          <div className="divider font-semibold">Done tasks</div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="flex bg-slate-200/20 items-center w-9/12 justify-between py-1 px-2 rounded-xl shadow-md">
              <div className="w-4/6 flex justify-center items-center">
                <h3 className="font-semibold">Cleaning in the bedroom</h3>
              </div>
              <div className="flex gap-1 ">
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-info shadow"
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
                    <path d="M5 9h11a4 4 0 1 1 0 8h-1"></path>
                    <path d="M9 13 5 9l4-4"></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-error shadow"
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
          </div>
          <div className="divider mb-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
