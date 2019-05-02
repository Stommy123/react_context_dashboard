import React, { useReducer } from "react";
import { rootReducer, initialState, rematchify } from "./store";

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch: rematchify(dispatch) }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
