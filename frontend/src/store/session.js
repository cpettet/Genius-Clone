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
    dispatch(setSessionUser(user));
    return user;
  }
};

export const signupUser = () => async (dispatch) => {
  
}

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

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET:
      return {
        ...state,
        user: action.user,
      };
    case UNSET:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
