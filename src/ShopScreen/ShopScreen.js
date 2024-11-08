import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import ShopItem from "./ShopItem";

import { useTheme } from "../ThemeProvider";

function ShopScreen({route}) {
  const {name} = route.params;
  const items = [
    {
      image_url:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      price: 50,
    },
    {
        image_url:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        price: 50,
      },
  ];

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
    },
    listConatiner: {
        flex: 1,
        width: "100%",
      justifyContent: "center",
     
    },
    backGound: {
      flex: 1,
      alignItems: "center",
    },
  });

  return (
    <SafeAreaView style={styles.backGound}>
    <Text style={styles.titleText}>{name}</Text>
      <View style={styles.listConatiner}>
        <FlatList
          contentContainerStyle={{ alignItems: "center"}}
          data={items}
          renderItem={({ item }) => <ShopItem data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default ShopScreen;
