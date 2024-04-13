import axios from 'axios';

const BASE_URL = 'https://sm-be.onrender.com/todo';

export const getAll = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getTodo = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const addTodo = async (obj) => {
  const res = await axios.post(BASE_URL, obj);
  return res.data;
};

export const updateTodo = async (obj, id) => {
  const res = await axios.put(`${BASE_URL}/${id}`, obj);
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
