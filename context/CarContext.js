import React, { createContext, useCallback, useReducer } from "react";

export const CarContext = createContext();

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CARS":
      return {
        packageIndex: -1,
        carIndex: -1,
        cars: action.payload,
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
  const [carState, dispatch] = useReducer(reducer, {});
  const addCars = useCallback((cars) => {
    dispatch({ type: "ADD_CARS", payload: cars });
  }, []);
  const addIndex = useCallback((carIndex, packageIndex) => {
    dispatch({ type: "ADD_INDEX", payload: { carIndex, packageIndex } });
  }, []);
  return (
    <CarContext.Provider value={{ addCars, carState, addIndex }}>
      {children}
    </CarContext.Provider>
  );
};
