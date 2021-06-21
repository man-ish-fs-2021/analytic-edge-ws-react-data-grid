import { START_FETCHING_POSTS, POST_FETCHED } from "./actiontypes";

export function fetchPosts() {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    dispatch(fetchingInProgress());
    const startFetch = async () => {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      console.log("posts data", data);
      dispatch(fetchedData(data));
    };
    startFetch();
  };
}

export function fetchingInProgress() {
  return {
    type: START_FETCHING_POSTS,
  };
}
export function fetchedData(posts) {
  return {
    type: POST_FETCHED,
    posts,
  };
}
