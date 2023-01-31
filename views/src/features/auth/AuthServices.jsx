import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

axios.defaults.withCredentials = true;

// Register user
const signUp = async (userData) => {
  const {data} = await axios.post(`${API_URL}auth/sign-up`, userData);

  if (data) {
    localStorage.setItem("token", data.accessToken);
  }

  return data;
};

// Login user
const signIn = async (userData) => {
  const {data} = await axios.post(`${API_URL}auth/sign-in`, userData);
  if (data) {
    localStorage.setItem("token",data.accessToken);
  }
  return data;
};

// Refresh User Access Token
const refresh = async () => {
  const response = await axios.get(`${API_URL}auth/refresh`);
  console.log("AuthService: refresh response is", response.data.accessToken);
  return response.data.accessToken;
};

// Login user
const loadUser = async (axiosPrivate) => {
  const {data} = await axiosPrivate.get(API_URL + "me");

  return data;
};
const getUser = async (email) => {
  // console.log(email)
  const {data} = await axios.post(API_URL + "info", email);

  return data;
};

// Logout user
const SignOut = async () => {
  const response = await axios.get(`${API_URL}auth/sign-out`);
  localStorage.removeItem("token");
  return response;
};

const authService = {
  signUp,
  SignOut,
  signIn,
  loadUser,
  getUser,
  refresh,
};

export default authService;
