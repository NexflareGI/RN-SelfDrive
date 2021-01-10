import React from "react";
import { View, StyleSheet } from "react-native";

function BottomFilterContainer(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    height: 61,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
  },
});

export default BottomFilterContainer;
