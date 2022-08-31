import React from "react";
import { View, SafeAreaView, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;

  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image source={plant.img} style={style.image} />
      </View>
      <View style={style.detailsContainer}>
        <View style={style.priceContainer1}>
          <Text style={style.text1}>{plant.name}</Text>
          <View style={style.priceTag}>
            <Text style={style.plantPrice}>${plant.price}</Text>
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.text2}>About</Text>
          <Text style={style.text3}>{plant.about}</Text>
          <View style={style.buyContainer}>
            <View style={style.counterContainer}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text style={style.counter}>1</Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={style.buyBtn}>
              <Text style={style.buttonText}>Buy</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    resizeMode: "contain",
    flex: 1,
  },
  priceContainer1: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text1: {
    fontSize: 22,
    fontWeight: "bold",
  },
  plantPrice: {
    marginLeft: 10,
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  text2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    color: "grey",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 20,
  },
  buyContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
