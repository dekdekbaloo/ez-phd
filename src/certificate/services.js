import axios from "axios";

const API_URL = "http://localhost:5001/ez-phd/us-central1";

const api = axios.create({ baseURL: API_URL });

export async function addToHallOfFame({ name, faculty, id }) {
  const { data } = api.post("/addToHallOfFame", { name, faculty, id });
  return data;
}
