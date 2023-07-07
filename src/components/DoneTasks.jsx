import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export default function DoneTasks({
  tasks,
  removeTask,
  setCurrentTask,
  popupVariants,
}) {
  return (
    <>
      <motion.div
        layout
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="divider font-semibold"
      >
        Done tasks
      </motion.div>
      <LayoutGroup>
        <motion.div layout className="flex flex-col items-center gap-2 w-full">
          <AnimatePresence>
            {tasks.map((task, index) => (
              <motion.div
                layout
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={index}
                className="flex bg-slate-200/20 items-center w-9/12 justify-between py-1 px-2 rounded-xl shadow-md"
              >
                <div className="w-4/6 flex justify-center items-center">
                  <h3 className="font-semibold">{task}</h3>
                </div>
                <div className="flex gap-1 ">
                  <button
                    type="button"
                    className="btn btn-sm btn-circle btn-info shadow"
                    onClick={() => setCurrentTask(task)}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </>
  );
}
