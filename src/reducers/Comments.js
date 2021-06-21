import {
  START_FETCHING_COMMENTS,
  COMMENTS_FETCHED,
} from "../actions/actiontypes";

const initialstate = {
  comments: [],
  isFetching: true,
};

export default function comments(state = initialstate, action) {
  switch (action.type) {
    case START_FETCHING_COMMENTS:
      return {
        ...state,
        isFetching: true,
      };
    case COMMENTS_FETCHED:
      return {
        ...state,
        comments: action.comments,
        isFetching: false,
      };
    default:
      return state;
  }
}
