function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.name}</h3>
        <p className={task.status === "Completed" ? "done" : "pending"}>
          {task.status}
        </p>
      </div>

      <div className="actions">
        <button onClick={() => onToggle(task.id)}>Toggle</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
