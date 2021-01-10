import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Srp from "./screens/Srp";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TravellerInfo from "./screens/TravellerInfo";

const { Screen, Navigator } = createStackNavigator();
export default function App() {
  const customFonts = {
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2276e3",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "Quicksand-Bold",
          },
        }}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen
          name="Srp"
          component={Srp}
          options={({ route }) => ({ title: route.params.address })}
        />
        <Screen name="Traveller" component={TravellerInfo} />
      </Navigator>
    </NavigationContainer>
  );
}
let styles = StyleSheet.create({});
