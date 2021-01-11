import React, { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SrpCard from "../components/srp/SrpCard";
import { getCars } from "../apis/srp";
import ErrorBottomSheet from "../components/error/ErrorBottomSheet";
import BottomFilterContainer from "../components/BottomFilter/BottomFilterContainer";
import { CarContext, CarProvider } from "../context/CarContext";

function Srp(props) {
  const [error, setError] = useState("");
  const [activeItem, setActiveItem] = useState();
  const { addSrpResponse, srpState, clearSrpResponse } = useContext(CarContext);
  useEffect(() => {
    getCars()
      .then((response) => {
        addSrpResponse(response);
      })
      .catch((err) => setError(err.message));
    return () => {
      clearSrpResponse();
    };
  }, []);
  const setActive = useCallback((index) => setActiveItem(index), []);
  return (
    <View style={styles.container}>
      {error.length > 0 ? (
        <ErrorBottomSheet errorMessage={error} {...props} />
      ) : (
        <>
          <FlatList
            data={srpState.cars_filtered}
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
