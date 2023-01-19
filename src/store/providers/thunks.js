import axios from "axios";
import { selectToken } from "../users/selectors";
import { allPartnersFetched, onePartnerFetched } from "../providers/slice";

const apiUrl = "http://localhost:4001";

export const fetchAllPartners = async (dispatch, getState) => {
  const token = selectToken(getState());
  // console.log("do we get token?", token);
  try {
    const response = await axios.get(`${apiUrl}/partners`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("all partners thunk", response.data);
    dispatch(allPartnersFetched(response.data));
  } catch (error) {
    console.log("An error has occurred", error);
  }
};

export const fetchPartnerById = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.get(`${apiUrl}/partners/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("single partner thunk", response);
    dispatch(onePartnerFetched(response.data));
  } catch (error) {
    console.log("An error has occurred", error);
  }
};

export const signUpPartner =
  (
    name,
    email,
    password,
    serviceProvider,
    compName,
    compEmail,
    compWebsite,
    compPNumber,
    compAddress
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        serviceProvider,
        compName,
        compEmail,
        compWebsite,
        compPNumber,
        compAddress,
      });
      console.log("SU partner response", response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
