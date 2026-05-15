import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5002/api",
});

export const getTasks = () => API.get("/tasks");
export const createTask = (data) => API.post("/tasks", data);
export const updateTask = (id) => API.put(`/tasks/${id}`);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);