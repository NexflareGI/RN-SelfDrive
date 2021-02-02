import React from "react";
import { View, StyleSheet } from "react-native";

function BottomNavContainer({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    height: 61,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
  },
});

export default BottomNavContainer;
