import { API_URL } from "../helpers/urls";
import { START_FETCHING_COMMENTS, COMMENTS_FETCHED } from "./actiontypes";

export function fetchComments() {
  return (dispatch) => {
    const url = API_URL.comments();
    dispatch(fetchingInProgress());
    const startFetch = async () => {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      console.log("Coments data", data);
      dispatch(fetchedData(data));
    };
    startFetch();
  };
}

export function fetchingInProgress() {
  return {
    type: START_FETCHING_COMMENTS,
  };
}
export function fetchedData(comments) {
  return {
    type: COMMENTS_FETCHED,
    comments,
  };
}
