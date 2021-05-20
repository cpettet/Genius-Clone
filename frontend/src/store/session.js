import { csrfFetch } from "./csrf";
/*
if user:
{
  user: {
    id,
    email,
    username,
    createdAt,
    updatedAt
  }
}
default/else:
{
  user: null
}
*/

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
  user: null,
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        user: action.user
      };
    case UNSET:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
