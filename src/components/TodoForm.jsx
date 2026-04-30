export default function TodoForm({ setNewTodo }) {
  return (
    <div className="flex justify-center">
      <form
        className="flex w-200  gap-4 bg-gray-600 p-4 items-center outline-2 outline-black mt-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          const todo = {
            severity: e.target.severity.value,
            todo: e.target.todo.value,
          };
          setNewTodo(todo);
          e.target.todo.value = "";
          e.target.severity.value = "";
        }}
      >
        <label className="flex flex-col gap-4 bg-gray-300 p-2 rounded-md">
          Severity:
          <textarea
            className="outline-2 border-black bg-gray-300 px-2"
            name="severity"
            id="severity"
            cols="30"
            placeholder="High, medium, low, etc..."
            rows="1"
          ></textarea>
        </label>
        <label className="flex flex-col  gap-4 bg-gray-300 p-2 rounded-md">
          To-do:
          <textarea
            className="outline-2 border-black bg-gray-300 px-2"
            name="todo"
            id="todo"
            cols="30"
            rows="4"
            placeholder="New task to do..."
          ></textarea>
        </label>
        <button
          className="bg-gray-400 border-2 border-black px-6 py-2 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
