import axios from "axios";
import Cookie from 'universal-cookie';

const cookie = new Cookie();

const API_URL = "http://localhost:8080/";


const register = (frist_name, last_name, email, password,date_of_birth,mobile) => {
  return axios.post(API_URL + "signup", {   
    frist_name,
    last_name,
    email,
    password,
    date_of_birth,
    mobile
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "user_signin", {
      email,
      password,
    })
    .then((response) => {
     
      if (response.data.user.frist_name) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));       
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const getAllUsers = () => {
  return axios.get(API_URL + "users").then((response) => {
   
    return response;
  });
};


const changePassword = ( email,password) => {
  const  atoken=localStorage.getItem('token');
  const token = atoken.replace(/"/g, '');

  return axios
    .post(API_URL + "change_password", {    
      email,
      password
    },  {
    
      headers: {
        'x-access-token':token,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
        return response.data[0];
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changePassword,
  getAllUsers
}

export default AuthService;
