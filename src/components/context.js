import { createContext, useContext, useState } from "react";
import * as actions from './actions'

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {

  return (
    <GlobalContext.Provider
      value={{ actions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
