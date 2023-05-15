import React, { ProviderProps, createContext, useReducer } from "react";
import { State } from "./contextTypes";



type Action =
  | { type: "TOGGLE_MODE" }
  

interface ModeContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const initialState: State = {
  isDark: true
};

const modeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {...state, isDark: !state.isDark };
    default:
      return state;
  }
};

export const ModeContext = createContext<ModeContextType>({
  state: initialState,
  dispatch: () => {},
});

export type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(modeReducer, initialState);
  
  return (
    <ModeContext.Provider value={{ state, dispatch }}>
      {children}
    </ModeContext.Provider>
  );
}
