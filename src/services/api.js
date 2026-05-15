import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-qwbj.onrender.com",
});

export const getTasks = () => API.get("/api/tasks");

export const createTask = (data) =>
  API.post("/api/tasks", data);

export const updateTask = (id) =>
  API.put(`/api/tasks/${id}`);

export const deleteTask = (id) =>
  API.delete(`/api/tasks/${id}`);