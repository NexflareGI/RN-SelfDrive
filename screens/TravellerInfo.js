import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
import BottomNavContainer from "../components/common/BottomNavContainer";
import CarBasic from "../components/carReview/CarBasic";
import CarDetail from "../components/carReview/CarDetail";
import { styles } from "../util/style";
import Button from "../components/common/Button";

function TravellerInfo() {
  const [showDetail, setShowDetail] = useState(false);
  const handleOnPress = () => {
    setShowDetail(!showDetail);
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          <CarBasic />
          {showDetail ? <CarDetail /> : null}
          <View style={styles.dotted_line} />
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
      </ScrollView>
      <BottomNavContainer>
        <View style={{ marginLeft: "auto" }}>
          <Button text="Proceed" />
        </View>
      </BottomNavContainer>
    </View>
  );
}

export default TravellerInfo;
