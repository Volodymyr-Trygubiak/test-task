import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  authUser: '',
  users: [],
  next_link: ''
}

const StateContext = createContext(initialState)

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }
    default:
      throw new Error();
  }
}

const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const value = { state, dispatch }
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  )
}

const useStateContext = () => {
  const context = useContext(StateContext);

  if (context) {
    return context;
  }

  throw new Error(`useStateContext must be used within a StateContextProvider`);
};

export { StateContextProvider, useStateContext }
