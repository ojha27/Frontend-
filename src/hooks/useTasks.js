import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (name) => {
    await createTask({ name });
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await updateTask(id);
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return { tasks, addTask, toggleTask, removeTask };
};