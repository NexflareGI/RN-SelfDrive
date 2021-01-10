import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SrpCard from "../components/srp/SrpCard";
import { getCars } from "../apis/srp";
import ErrorBottomSheet from "../components/error/ErrorBottomSheet";

function Srp(props) {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getCars()
      .then((response) => {
        setCars(response);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <View style={styles.container}>
      {error.length > 0 ? (
        <ErrorBottomSheet errorMessage={error} {...props} />
      ) : (
        <FlatList
          data={cars}
          renderItem={({ item }) => <SrpCard car={item} {...props} />}
          ListEmptyComponent={<Text>Empty List</Text>}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e7ee",
  },
});

export default Srp;
