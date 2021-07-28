import { csrfFetch } from "./csrf";

const SET = "/session/SET";
const UNSET = "/session/UNSET";

const initialState = {
  user: null,
};

const setSessionUser = (user) => ({
  type: SET,
  user,
});

const unsetSessionUser = () => ({
  type: UNSET,
});

export const checkUserLogin = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const user = await res.json();
    dispatch(setSessionUser(user?.user));
    return user;
  }
};

export const signupUser =
  ({ username, email, password }) =>
  async (dispatch) => {
    const res = await csrfFetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (res.ok) {
      const user = await res.json();
      dispatch(setSessionUser(user));
      return user;
    }
  };

export const loginUser =
  ({ credential, password }) =>
  async (dispatch) => {
    const res = await csrfFetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        credential,
        password,
      }),
    });

    if (res.ok) {
      const user = await res.json();
      dispatch(setSessionUser(user));
      return user;
    }
  };

export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(unsetSessionUser());
    return;
  }
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET:
      newState = { ...state };
      newState.user = action.user;
      return newState;
    case UNSET:
      newState = Object.assign({}, state);
      newState = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
