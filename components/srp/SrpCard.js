import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Offering from "./Offering";

const SrpCard = React.memo(
  ({
    car: {
      img,
      brand,
      model,
      transmission,
      seater,
      fuel_type,
      vehicle_offerings = [],
      packages,
      selected_pkg_index,
    },
    navigation,
  }) => {
    return (
      <TouchableOpacity
        style={styles.card_container}
        onPress={() => navigation.navigate("Traveller")}
      >
        <View style={styles.card_col}>
          <View style={styles.car_img_container}>
            <Image source={{ uri: img }} style={styles.car_img} />
          </View>
          <View style={styles.col_1_detail}>
            <Text style={styles.car_name}>
              {brand} {model}
            </Text>
            <Text style={styles.car_basic}>
              {transmission} | {seater} | {fuel_type}
            </Text>
          </View>
          <View style={{ marginLeft: "auto", alignContent: "center" }}>
            <Image
              style={styles.go_safe_icon}
              source={require("../../assets/static/icn_gosafe.png")}
            />
          </View>
        </View>

        <View style={styles.card_col}>
          <View style={styles.offerings}>
            {vehicle_offerings.length > 0 ? (
              <FlatList
                inverted={true}
                data={vehicle_offerings}
                renderItem={({ item }) => <Offering item={item} />}
              />
            ) : null}
          </View>
          <View style={styles.price_container}>
            <Text style={{ fontSize: 11, color: "#777777" }}>
              Starting From
            </Text>
            <Text style={styles.final_price}>
              {packages[selected_pkg_index].total_amount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

let styles = StyleSheet.create({
  card_container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 17,
    paddingTop: 17,
    paddingBottom: 16,
    marginBottom: 8,
    backgroundColor: "white",
  },
  card_col: {
    display: "flex",
    flexDirection: "row",
  },
  col_1_detail: {
    paddingLeft: 11,
    paddingTop: 7,
    paddingBottom: 9,
    justifyContent: "center",
    display: "flex",
  },
  car_img_container: {
    height: 54,
    width: 97,
    backgroundColor: "white",
  },
  car_img: {
    width: "100%",
    height: "100%",
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
  go_safe_icon: { width: 58, height: 18 },
  offerings: {
    paddingTop: 6,
    color: "#777777",
    fontFamily: "Roboto-Regular",
  },
  offering: {
    color: "#777777",
  },
  price_container: {
    marginLeft: "auto",
    display: "flex",
  },
  final_price: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    color: "#141823",
    textAlign: "right",
  },
});

export default SrpCard;
