import axios from "axios";

const baseURL = "//localhost:3000/api/user";

export const LoginAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    switch (error.response.status) {
      case 404:
        return {
          status: 404,
          message: error.response.data,
        };
      case 401:
        return {
          status: 401,
          message: error.response.data,
        };
      default:
        return {
          message: "Unhandled",
        };
    }
  }
};
