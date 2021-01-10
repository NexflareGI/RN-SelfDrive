import React, { useContext } from "react";
import { Text, View } from "react-native";
import { CarContext } from "../context/CarContext";

function TravellerInfo() {
  const {
    carState: { carIndex, packageIndex, cars },
  } = useContext(CarContext);
  console.log(cars[carIndex].packages[packageIndex]);
  return <Text>Hello World</Text>;
}

export default TravellerInfo;
