import { csrfFetch } from "./csrf";

const ADD_TRACK = "track/ADD_TRACK";
const EDIT_TRACK = "track/EDIT_TRACK";
const DELETE_TRACK = "track/DELETE_TRACK";

// action creators
export const addTrack = (track) => ({
  type: ADD_TRACK,
  payload: track,
});

export const editTrack = (track) => ({
  type: EDIT_TRACK,
  payload: track,
});

export const removeTrack = (trackId) => ({
  type: DELETE_TRACK,
  payload: trackId,
});

// thunk action creators
export const addNewTrack = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/tracks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newTrack = await res.json();
  if (res.ok) {
    dispatch(addTrack(newTrack));
    return newTrack;
  } else {
    return res.errors;
  }
};

export const getTrack = (trackId) => async (dispatch) => {
  const res = await csrfFetch(`/api/tracks/${trackId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const fetchedTrack = await res.json();
  if (res.ok) {
    dispatch(addTrack(fetchedTrack));
    return fetchedTrack;
  } else {
    return res.errors;
  }
};

export const updateTrack = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/tracks/${data.trackId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  const updatedTrack = await res.json();
  if (res.ok) {
    dispatch(editTrack(updatedTrack));
    return updatedTrack;
  } else {
    return res.errors;
  }
};

export const deleteTrack = (trackId) => async (dispatch) => {
  const res = await csrfFetch(`/api/tracks/${trackId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (res.ok) {
    dispatch(removeTrack(data.trackId));
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

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK: {
      const newState = { ...state };
      const newTrack = action.payload;
      newState.byId[newTrack.id] = newTrack;
      if (!newState.allIds.includes(newTrack.id))
        newState.allIds.push(newTrack.id);
      return newState;
    }
    case EDIT_TRACK: {
      const newState = { ...state };
      const editedTrack = action.payload;
      newState.byId[editedTrack.id] = editedTrack;
      return newState;
    }
    case DELETE_TRACK: {
      const newState = { ...state };
      const trackId = action.payload;
      delete newState.byId[trackId];
      newState.allIds = newState.allIds.filter((item) => item !== trackId);
      return newState;
    }
    default:
      return state;
  }
}
