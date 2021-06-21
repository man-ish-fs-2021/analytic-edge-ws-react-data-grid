import { API_URL } from "../helpers/urls";
import { START_FETCHING, DATA_FETCHED } from "./actiontypes";

export function fetchUsers() {
  return (dispatch) => {
    const url = API_URL.users();
    dispatch(fetchingInProgress());
    const startFetch = async () => {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      console.log("users Data", data);
      dispatch(fetchedData(data));
    };
    startFetch();
  };
}

export function fetchingInProgress() {
  return {
    type: START_FETCHING,
  };
}
export function fetchedData(users) {
  return {
    type: DATA_FETCHED,
    users,
  };
}
