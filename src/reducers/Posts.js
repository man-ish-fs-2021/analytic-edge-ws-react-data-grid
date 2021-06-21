import { START_FETCHING_POSTS, POST_FETCHED } from "../actions/actiontypes";

const initialstate = {
  posts: [],
  isFetching: true,
};

export default function posts(state = initialstate, action) {
  switch (action.type) {
    case START_FETCHING_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case POST_FETCHED:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
      };
    default:
      return state;
  }
}
