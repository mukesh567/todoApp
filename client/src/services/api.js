import axios from "axios";
import { CREATE_TODO, DELETE_TODO, LOGIN, MARK_TODO, REGISTER, TODO_LIST } from "./apiConstants.js";

export const login = async (data) => {
  return axios.post(LOGIN, data);
};

export const register = async (data) => {
  return axios.post(REGISTER, data);
};

//Create todo
const getToken = () => {
  let user = localStorage.getItem("user");
  if (!user) return;

  const userObj = JSON.parse(user);
  return userObj.token;
};

export const createTodo = async (data) => {
  let token = getToken();

  return axios.post(CREATE_TODO, data, {
    headers: {
      auth: token,
    },
  });
};

//List of all todo
export const getTodoList = async () => {
  let token = getToken();

  return axios.get(TODO_LIST, {
    headers: {
      auth: token,
    },
  });
};

//Delete todo
export const deleteTodo = async (data) => {
  let token = getToken();

  return axios.post(DELETE_TODO, data, {
    headers: {
      auth: token,
    },
  });
};

//Mark todo
export const markTodo = async (data) => {
  let token = getToken();

  return axios.post(MARK_TODO, data, {
    headers: {
      auth: token,
    },
  });
};