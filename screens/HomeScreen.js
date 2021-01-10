import React from "react";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() =>
          navigation.navigate("Srp", {
            address: "Embassy Golf Links Bussiness Park",
          })
        }
        title="Get Cars"
      />
    </View>
  );
}

export default HomeScreen;
