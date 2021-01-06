import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getCars } from "./apis/srp";
import SrpCard from "./components/srp/SrpCard";

export default function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars()
      .then((response) => {
        setCars(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <SrpCard car={item} />}
        ListEmptyComponent={<Text>Empty List</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e7ee",
  },
});
