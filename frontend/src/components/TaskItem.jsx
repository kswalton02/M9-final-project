import api from "../services/api";

function TaskItem({ task, onRefresh }) {
  const token = localStorage.getItem("token");

  const toggleComplete = async () => {
    try {
      await api.put(
        `/tasks/${task._id}`,
        {
          completed: !task.completed,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async () => {
    try {
      await api.delete(`/tasks/${task._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li className="task-item">
      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      <div>
        <button
          className="complete-btn"
          onClick={toggleComplete}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;