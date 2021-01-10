import React, { useContext } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { CarContext } from "../../context/CarContext";

function CarDetail() {
  const {
    carState: { cars, carIndex, packageIndex },
  } = useContext(CarContext);
  const { packages, home_delivery } = cars[carIndex];
  const { base_fare, total_amount, excess_kms_charges, free_kms } = packages[
    packageIndex
  ];
  const RenderDetail = ({ heading, value }) => {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>{heading}</Text>
        <Text style={{ fontWeight: "bold" }}>{value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <RenderDetail
        heading="Delivery Type"
        value={home_delivery ? "Home Delivery" : "Self Pickup"}
      />
      <View style={styles.divider}></View>
      <RenderDetail heading="Included Kms" value={`${free_kms} kms`} />
      <View style={styles.divider}></View>
      <RenderDetail heading="Extra Kms" value={`${excess_kms_charges}/km`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    borderWidth: 1,
    height: 18,
    borderColor: "#eff3f8",
    marginRight: 20,
  },
});

export default CarDetail;
