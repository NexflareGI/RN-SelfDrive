import React, { useContext } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { CarContext } from "../../context/CarContext";

function CarBasic() {
  const {
    carState: { cars, carIndex, packageIndex },
  } = useContext(CarContext);
  const car = cars[carIndex];
  const { img, brand, model, transmission, seater, fuel_type } = car;
  const carPackage = car.packages[packageIndex];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.image_container} source={{ uri: img }}></Image>
          <View style={styles.col_1_detail}>
            <Text style={styles.car_name}>
              {brand} {model}
            </Text>
            <Text style={styles.car_basic}>
              {transmission} | {seater} | {fuel_type}
            </Text>
          </View>
          <View style={styles.fullfill_container}>
            <Text>Fullfilled by</Text>
            <Image
              source={{
                uri:
                  "http://canonprodpp.goibibo.com/static/logos/zoom_logo.png",
              }}
              style={styles.vedor_image_container}
            />
          </View>
        </View>
      </View>
      <View style={styles.dotted_line} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  fullfill_container: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  image_container: {
    width: 74,
    height: 41,
    paddingHorizontal: 3,
    paddingTop: 2,
  },
  dotted_line: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#eff3f8",
  },
  vedor_image_container: { height: 18, width: 18, marginTop: 4 },
  col_1_detail: {
    paddingLeft: 11,
    justifyContent: "center",
    display: "flex",
  },
  car_name: {
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    color: "#141823",
  },
  car_basic: {
    color: "#777777",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
  },
});
export default CarBasic;
