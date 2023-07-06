
export default function TaskInput() {
  return (
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
  );
}
