import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import plants from "../../consts/plants";

const width = Dimensions.get("window").width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Details", plant)}
      >
        <View style={style.card}>
          <View style={style.heartContainer}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: plant.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View style={style.cardContainer}>
            <Image source={plant.img} style={style.plantImage} />
          </View>

          <Text style={style.plantText}>{plant.name}</Text>
          <View style={style.plantPrice}>
            <Text style={style.priceSymbol}>${plant.price}</Text>
            <View style={style.addContainer}>
              <Text style={style.addText}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={style.HomeScreenContainer}>
      <View style={style.header}>
        <View>
          <Text style={style.text1}>Welcome to</Text>
          <Text style={style.text2}>Plant Shop</Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.search}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={style.searchIcon} />
          <TextInput placeholder="Search" style={style.searchInput} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 32,
    color: COLORS.green,
    fontWeight: "bold",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  heartContainer: {
    alignItems: "flex-end",
  },
  cardContainer: {
    height: 100,
    alignItems: "center",
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  plantImage: {
    flex: 1,
    resizeMode: "contain",
  },
  plantText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  plantPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  priceSymbol: {
    fontSize: 17,
    fontWeight: "bold",
  },
  addContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.green,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: "bold",
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    marginTop: 30,
    flexDirection: "row",
  },
  searchIcon: {
    marginLeft: 20,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
