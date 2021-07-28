import { csrfFetch } from "../store/csrf";

const ADD_COMMENT = "comment/ADD_COMMENT";
const LOAD_COMMENTS = "comment/LOAD_COMMENTS";

// action creators
export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const loadComments = (trackComments) => ({
  type: LOAD_COMMENTS,
  payload: trackComments,
});

// thunk action creators
export const fetchAddComment = (comment) => async (dispatch) => {
  const res = await csrfFetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
  const newComment = await res.json();
  if (res.ok) {
    dispatch(addComment(newComment));
    return newComment;
  }
};

export const getTrackComments = (trackId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/track${trackId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const trackComments = await res.json();
  if (res.ok) {
    dispatch(loadComments(trackComments));
    return trackComments;
  }
};

const initialState = {
  comments: null
};

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_COMMENT:
      newState = { ...state };
      const newComment = action.payload;
      newState[newComment.id] = newComment;
      return newState;
    case LOAD_COMMENTS:
      newState = { ...state };
      newState = {};
      action.payload.forEach(comment => {
        newState[comment.id] = comment;
      })
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
