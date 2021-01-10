import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ErrorBottomSheet({ errorMessage, navigation }) {
  return (
    <View style={style.container}>
      <View style={style.error_message_container}>
        <Image
          source={require("../../assets/static/error_icon/error_icon.png")}
          style={style.error_icon}
        />
        <Text style={style.error_message}>{`${
          errorMessage ? errorMessage : "Something went wrong"
        }`}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={style.error_button}>
          <Text style={style.error_button_text}>Go Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "auto",
    paddingTop: 40,
    paddingHorizontal: 8,
    paddingBottom: 10,
    backgroundColor: "white",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  error_message_container: {
    alignItems: "center",
  },
  error_icon: {
    width: 67,
    height: 66,
  },
  error_message: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    marginTop: 30,
  },
  error_button: {
    display: "flex",
    marginTop: 50,
    backgroundColor: "#eb6125",
    borderRadius: 8,
    marginTop: 50,
    paddingVertical: 12,
  },
  error_button_text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
  },
});

export default ErrorBottomSheet;
