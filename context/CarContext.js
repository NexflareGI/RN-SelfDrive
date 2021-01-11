import React, { createContext, useCallback, useReducer } from "react";

export const CarContext = createContext();

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CLEAR_SRP_RESPONSE":
      return {
        packageIndex: -1,
        carIndex: -1,
        cars_filtered: [],
        other_cars: [],
      };
    case "ADD_SRP_RESPONSE":
      return {
        packageIndex: -1,
        carIndex: -1,
        ...action.payload,
      };
    case "ADD_INDEX":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
  return state;
};

export const CarProvider = ({ children }) => {
  const [srpState, dispatch] = useReducer(reducer, {});
  const addSrpResponse = useCallback((response) => {
    dispatch({ type: "ADD_SRP_RESPONSE", payload: response });
  }, []);

  const clearSrpResponse = useCallback(() =>
    dispatch({ type: "CLEAR_SRP_RESPONSE" })
  );
  const addIndex = useCallback((carIndex, packageIndex) => {
    dispatch({ type: "ADD_INDEX", payload: { carIndex, packageIndex } });
  }, []);
  return (
    <CarContext.Provider
      value={{ addSrpResponse, srpState, addIndex, clearSrpResponse }}
    >
      {children}
    </CarContext.Provider>
  );
};
