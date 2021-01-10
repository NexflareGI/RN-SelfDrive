import React from "react";
import { StyleSheet, View, Text } from "react-native";

function PackageOffering({ offering }) {
  return (
    <View style={style.container}>
      <View style={style.dot} />
      <Text style={style.offering_text}>{offering}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "#195eb7",
  },
  offering_text: {
    marginLeft: 6,
    color: "#777777",
  },
});

export default PackageOffering;
