import { csrfFetch } from "./csrf";

const ADD_USER = "user/ADD_USER";

// action creators
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

// thunk action creators
export const getUser = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const fetchedUser = await res.json();
  if (res.ok) {
    dispatch(addUser(fetchedUser));
    return fetchedUser;
  } else {
    return res.errors;
  }
};

// reducer
const initialState = {
  byId: {},
  allIds: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const newState = {...state}
      const newUser = action.payload;
      newState.byId[newUser.id] = newUser;
      if (!newState.allIds.includes(newUser.id))
        newState.allIds.push(newUser.id);
      return newState;
    }
    default:
      return state;
  }
}
