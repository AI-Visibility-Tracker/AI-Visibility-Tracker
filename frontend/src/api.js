import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-visibility-backend.onrender.com",
});

export const analyzeBrand = (payload) =>
  api.post("/analyze", payload);
