import axios from "axios";
import { selectToken } from "../users/selectors";
import { allPartnersFetched } from "../providers/slice";

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
