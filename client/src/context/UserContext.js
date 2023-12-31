import PropTypes from "prop-types";
import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "REMOVE_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
