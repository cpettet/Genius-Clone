import { csrfFetch } from "../store/csrf";

const ADD_COMMENT = "comment/ADD_COMMENT";
const LOAD_COMMENTS = "comment/LOAD_COMMENTS";
const EDIT_COMMENT = "/comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

// action creators
export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const loadComments = (trackComments) => ({
  type: LOAD_COMMENTS,
  payload: trackComments,
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

export const removeComment = (commentId) => ({
  type: DELETE_COMMENT,
  payload: commentId,
});

// thunk action creators
export const createComment = (comment) => async (dispatch) => {
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

export const updateComment = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${data.commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const updatedComment = await res.json();
  if (res.ok) {
    dispatch(editComment(updatedComment.comment));
    return updatedComment;
  } else {
    return res.errors;
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (res.ok) {
    dispatch(removeComment(data.commentId));
    return data;
  } else {
    return res.errors;
  }
};

const initialState = {
  byId: {},
  allIds: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const newState = { ...state };
      const newComment = action.payload;
      newState.byId[newComment.id] = newComment;
      if (!newState.allIds.includes(newComment.id))
        newState.allIds.push(newComment.id);
      return newState;
    }
    case LOAD_COMMENTS: {
      const newState = { ...state };
      action.payload.forEach((comment) => {
        newState.byId[comment.id] = comment;
        if (!newState.allIds.includes(comment.id))
          newState.allIds.push(comment.id);
      });
      return newState;
    }
    case EDIT_COMMENT: {
      const newState = { ...state };
      const editedComment = action.payload;
      newState.byId[editedComment.id] = editedComment;
      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      const commentId = action.payload;
      delete newState.byId[commentId];
      newState.allIds = newState.allIds.filter((item) => item !== commentId);
      return newState;
    }
    default:
      return state;
  }
};

export default commentReducer;
