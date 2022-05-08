import React, { createContext, useReducer } from "react";

const init = {
  logs: [],
  postList: [],
  userName: null,
};

const store = createContext(init);

const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGS":
      return {
        ...state,
        logs: action.payload,
      };
    case "SET_POST":
      return {
        ...state,
        postList: action.payload,
      };
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
