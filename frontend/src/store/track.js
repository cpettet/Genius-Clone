import { csrfFetch } from "./csrf";

const ADD_TRACK = "track/ADD_TRACK";

// action creators
export const addTrack = track => ({
  type: ADD_TRACK,
  payload: track,
})

// thunk action creators
export const addNewTrack = data => async dispatch => {
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
}

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
      newState[newTrack.id] = newTrack;
      return newState;
    }
    default:
      return state;
  }
}
