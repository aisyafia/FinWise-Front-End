import axios from "axios";
import { loginSuccess } from "./slice";

const apiUrl = "http://localhost:4001";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    // console.log("backend response", response.data);
    dispatch(
      loginSuccess({ token: response.data.token, profile: response.data.user })
    );
  } catch (error) {
    console.log("An error has occurred", error);
  }
};
