import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const getPeople = async (page = 1) => {
  const res = await api.get(`/people/?page=${page}`);
  return res.data;
};
export const getPlanets = async (page = 1) => {
  const res = await api.get(`/planets/?page=${page}`);
  return res.data;
};
