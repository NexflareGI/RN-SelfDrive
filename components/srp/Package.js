import React, { useContext } from "react";
import { Image, StyleSheet, View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarContext } from "../../context/CarContext";
import PackageOffering from "./PackageOffering";

function Package(props) {
  const {
    package: { vendor, base_fare, total_amount, free_kms, offerings },
    navigation,
    index: carIndex,
    packageIndex,
  } = props;
  const { addIndex } = useContext(CarContext);
  const handlePress = () => {
    addIndex(carIndex, packageIndex);
    navigation.navigate("Traveller");
  };
  return (
    <View style={styles.package_container}>
      <View style={styles.row}>
        <Image
          source={{
            uri: "http://canonprodpp.goibibo.com/static/logos/zoom_logo.png",
          }}
          style={styles.vendor_logo}
        />
        <View style={[{ marginLeft: 13, fontSize: 12, flex: 6 }, styles.row]}>
          <Text style={{ color: "#777777" }}>Service by </Text>
          <Text>{vendor}</Text>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.base_price}>{base_fare}</Text>
          <Text style={styles.final_price}>{total_amount}</Text>
        </View>
      </View>
      {
        <Text style={{ textAlign: "right", color: "#777777" }}>
          For {free_kms} kms
        </Text>
      }
      <View
        style={[styles.row, { marginTop: 8 }]}
        onStartShouldSetResponder={(event) => true}
      >
        <FlatList
          data={offerings}
          renderItem={({ item }) => <PackageOffering offering={item} />}
          keyExtractor={(item, index) => index}
        />
        <View style={styles.book_btn}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.btn_text}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  package_container: {
    paddingVertical: 14,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  vendor_logo: {
    width: 24,
    height: 24,
  },
  price_container: {
    display: "flex",
    flexDirection: "row",
    color: "#141823",
    alignItems: "center",
    marginLeft: "auto",
    justifyContent: "flex-end",
    flex: 4,
  },
  base_price: {
    fontSize: 12,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textAlign: "center",
    marginRight: 5,
  },
  final_price: {
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    textAlign: "right",
  },
  book_btn: {
    alignSelf: "flex-end",
    marginLeft: "auto",
    backgroundColor: "#ff6d38",
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 6,
    color: "white",
  },
  btn_text: {
    color: "white",
    fontFamily: "Quicksand-Bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Package;
