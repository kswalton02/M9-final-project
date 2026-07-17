import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import api from "../services/api";

function TaskList({ refresh }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  loadTasks();
}, [refresh]);

  return (
    <div className="card">
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
             key={task._id}
             task={task}
             onRefresh={loadTasks}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;