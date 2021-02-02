import React, { useContext } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { color } from "react-native-reanimated";
import { CarContext } from "../../context/CarContext";
import { colors } from "../../util/color";
import { styles as commonStyle } from "../../util/style";

function CarDetail() {
  const {
    srpState: { cars_filtered, carIndex, packageIndex, other_cars },
  } = useContext(CarContext);
  const { packages, home_delivery, vehicle_offerings } = cars_filtered[
    carIndex
  ];
  const { base_fare, total_amount, excess_kms_charges, free_kms } = packages[
    packageIndex
  ];
  const fuelIncluded = vehicle_offerings.filter(
    (offering) => offering.key === "FE" || offering.key === "FI"
  )[0].value;
  const RenderDetail = ({ heading, value }) => {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ color: colors.title }}>{heading}</Text>
        <Text style={{ fontWeight: "bold", color: colors.value }}>{value}</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <RenderDetail
          heading="Delivery Type"
          value={home_delivery ? "Home Delivery" : "Self Pickup"}
        />
        <View style={styles.divider}></View>
        <RenderDetail heading="Included Kms" value={`${free_kms} kms`} />
        <View style={styles.divider}></View>
        {excess_kms_charges ? (
          <RenderDetail
            heading="Extra Kms"
            value={`${excess_kms_charges}/km`}
          />
        ) : null}
      </View>
      <View style={commonStyle.dotted_line} />
      <View style={styles.container}>
        <Text style={styles.fuel_text}>{fuelIncluded}</Text>
        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={commonStyle.base_price}>{base_fare}</Text>
          <Text style={commonStyle.final_price}>{total_amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    borderWidth: 1,
    height: 18,
    borderColor: "#eff3f8",
    marginRight: 20,
  },
  fuel_text: {
    color: colors.value,
    fontSize: 14,
  },
});

export default CarDetail;
