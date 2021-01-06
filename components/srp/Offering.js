import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Offering({ item }) {
  const getImgIcon = (iconKey) => {
    let icon = "";
    switch (iconKey) {
      case "HD":
        return <Image source={require("../../assets/static/delivery.svg")} />;
      case "FE":
        return <Image source={require("../../assets/static/fuelTank.svg")} />;
      default:
        return <Image source={require("../../assets/static/fuelTank.svg")} />;
    }
  };

  return (
    <View style={styles.offering_container}>
      {/* {getImgIcon(item.key)} */}
      <Text style={styles.offering}>{item.value}</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  offering_container: {
    display: "flex",
    flexDirection: "row",
  },
  offering: {
    color: "#777777",
  },
});

export default Offering;
