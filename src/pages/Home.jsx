import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import './home.css';

function Home() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });
  return (
    <div className="container">
      <h1 className="title">Task Manager 🚀</h1>

      <TaskForm onAdd={addTask} />
      <div className="filters">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Pending" ? "active" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={removeTask}
      />
    </div>
  );
}

export default Home;
