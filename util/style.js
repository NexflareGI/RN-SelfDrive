import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dotted_line: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#eff3f8",
  },
  base_price: {
    fontSize: 12,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textAlign: "center",
    marginRight: 5,
  },
  final_price: {
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    textAlign: "right",
  },
});
