import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HTML from "react-native-render-html";

function PackageOffering({ offering }) {
  return (
    <View style={style.container}>
      <View style={style.dot} />
      <HTML source={{ html: offering }}>{offering}</HTML>
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
    marginRight: 6,
  },
  offering_text: {
    color: "#777777",
  },
});

export default PackageOffering;
