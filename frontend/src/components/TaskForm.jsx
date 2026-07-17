import { useState } from "react";
import api from "../services/api";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");

      onTaskAdded();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;