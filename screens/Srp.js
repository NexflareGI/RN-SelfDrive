import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SrpCard from "../components/srp/SrpCard";
import { getCars } from "../apis/srp";
import ErrorBottomSheet from "../components/error/ErrorBottomSheet";
import BottomFilterContainer from "../components/BottomFilter/BottomFilterContainer";

function Srp(props) {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");
  const [activeItem, setActiveItem] = useState();
  useEffect(() => {
    getCars()
      .then((response) => {
        setCars(response);
      })
      .catch((err) => setError(err.message));
  }, []);
  const setActive = useCallback((index) => setActiveItem(index), []);
  return (
    <View style={styles.container}>
      {error.length > 0 ? (
        <ErrorBottomSheet errorMessage={error} {...props} />
      ) : (
        <>
          <FlatList
            data={cars}
            renderItem={({ item, index }) => (
              <SrpCard
                car={item}
                index={index}
                {...props}
                isActive={activeItem === index ? true : false}
                setActive={setActive}
              />
            )}
            ListEmptyComponent={<Text>Empty List</Text>}
          />
          <BottomFilterContainer />
        </>
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
