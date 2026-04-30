export default function TodoCard({ todo, setTodoToRemove }) {
  let severityColor;
  switch (todo.severity) {
    case "High":
    case "high":
      severityColor = "text-red-700";
      break;
    case "Medium":
    case "medium":
      severityColor = "text-yellow-300";
      break;
    default:
      severityColor = "text-green-700";
      break;
  }
  return (
    <div className="flex flex-col gap-2 px-10 py-4 border-4 border-white/30 nth-[4n+1]:bg-purple-400 nth-[4n+2]:bg-blue-300 nth-[4n+3]:bg-emerald-300 nth-[4n+4]:bg-amber-200 rounded-xl">
      <h2
        className={
          severityColor +
          " bg-black/20 text-shadow-sm font-bold text-3xl text-shadow-black p-2 rounded-xl text-center"
        }
      >
        {todo.severity}
      </h2>
      <p className="bg-white/40 p-4 rounded-xl">{todo.todo}</p>
      <div className="flex flex-col gap-1 bg-white/40 p-4 rounded-xl">
        <p className="text-center">Created at:</p>
        <p> {todo.created_at}</p>
      </div>
      <button
        className="bg-gray-400 border-black border rounded-sm py-1"
        onClick={() => {
          setTodoToRemove(todo);
          console.log(`Removing: ${todo.id}`);
        }}
      >
        Remove
      </button>
    </div>
  );
}
