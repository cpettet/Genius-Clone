import { csrfFetch } from "./csrf";

const ADD_ANNOTATION = "annotation/ADD_ANNOTATION";
const LOAD_ANNOTATIONS = "annotation/LOAD_ANNOTATIONS";
const EDIT_ANNOTATION = "annotation/EDIT_ANNOTATION";
const DELETE_ANNOTATION = "annotation/DELETE_ANNOTATION";

// action creators
export const addAnnotation = (annotation) => ({
  type: ADD_ANNOTATION,
  payload: annotation,
});

export const loadAnnotations = (trackAnnotations) => ({
  type: LOAD_ANNOTATIONS,
  payload: trackAnnotations,
});

export const editAnnotation = (annotation) => ({
  type: EDIT_ANNOTATION,
  payload: annotation,
});

export const removeAnnotation = (annotationId) => ({
  type: DELETE_ANNOTATION,
  payload: annotationId,
});

// thunk action creators
export const createAnnotation = (annotation) => async (dispatch) => {
  const res = await csrfFetch("/api/annotations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(annotation),
  });
  const newAnnotation = await res.json();
  if (res.ok) {
    dispatch(addAnnotation(newAnnotation));
    return newAnnotation;
  }
};

export const getTrackAnnotations = (trackId) => async (dispatch) => {
  const res = await csrfFetch(`/api/annotations/track${trackId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const trackAnnotations = await res.json();
  if (res.ok) {
    dispatch(loadAnnotations(trackAnnotations));
    return trackAnnotations;
  }
};

export const updateAnnotation = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/annotations/${data.annotationId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const updatedAnnotation = await res.json();
  if (res.ok) {
    dispatch(editAnnotation(updatedAnnotation.annotation));
    return updatedAnnotation;
  } else {
    return res.errors;
  }
};

export const deleteAnnotation = (annotationId) => async (dispatch) => {
  const res = await csrfFetch(`/api/annotations/${annotationId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (res.ok) {
    dispatch(removeAnnotation(data.annotationId));
    return data;
  } else {
    return res.errors;
  }
};

// reducer
const initialState = {
  byId: {},
  allIds: [],
};

const annotationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANNOTATION: {
      const newState = { ...state };
      const newAnnotation = action.payload;
      newState.byId[newAnnotation.id] = newAnnotation;
      newState.allIds.push(newAnnotation.id);
      return newState;
    }
    case LOAD_ANNOTATIONS: {
      const newState = { ...state };
      action.payload.forEach((annotation) => {
        newState.byId[annotation.id] = annotation;
        if (!newState.allIds.includes(annotation.id))
          newState.allIds.push(annotation.id);
      });
      return newState;
    }
    case EDIT_ANNOTATION: {
      const newState = { ...state };
      const editedAnnotation = action.payload;
      newState.byId[editedAnnotation.id] = editedAnnotation;
      return newState;
    }
    case DELETE_ANNOTATION: {
      const newState = { ...state };
      const annotationId = action.payload;
      delete newState.byId[annotationId];
      newState.allIds = newState.allIds.filter((item) => item !== annotationId);
      return newState;
    }
    default:
      return state;
  }
};

export default annotationReducer;
