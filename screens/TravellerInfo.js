import React, { useContext } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import CarBasic from "../components/carReview/CarBasic";
import CarDetail from "../components/carReview/CarDetail";
import { CarContext } from "../context/CarContext";

function TravellerInfo() {
  const [showDetail, setShowDetail] = useState(false);
  const {
    carState: { carIndex, packageIndex, cars },
  } = useContext(CarContext);
  const handleOnPress = () => {
    setShowDetail(!showDetail);
  };
  return (
    <View>
      <View style={{ backgroundColor: "white" }}>
        <CarBasic />
        {showDetail ? <CarDetail /> : null}
        <TouchableOpacity onPress={handleOnPress}>
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 3,
              color: "#2276e3",
              fontSize: 11,
            }}
          >
            {showDetail ? "Hide Detail" : "View Detail"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TravellerInfo;
