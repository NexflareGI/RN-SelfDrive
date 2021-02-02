import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../util/color";

function Button({ text = "Button", onPress = () => {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn_container}>
        <Text style={styles.btn_text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    backgroundColor: colors.btn,
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 6,
    color: "white",
  },
  btn_text: {
    color: "white",
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
