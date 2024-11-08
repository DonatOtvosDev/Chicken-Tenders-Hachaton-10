import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Button, View } from "react-native";
import BlueprintItem from "./BlueprintItem";

import { useTheme } from "../ThemeProvider";

function BlueprintScreen({navigation}) {
  const blueprints = [
    {
      name: "Truck",
      description: "lorem Laborum sit laborum mollit quis consequat laborum reprehenderit dolor aliquip proident deserunt velit commodo excepteur. Sit nostrud dolor et irure consequat Lorem excepteur mollit ullamco quis pariatur culpa. Ea tempor non laborum consequat adipisicing labore pariatur quis enim. Officia eu cupidatat ex velit.",
      image_url:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      elements: ["tire", "wheel", "box"],
    },
    {
      name: "Truck",
      description: "this is a beautiful",
      image_url:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      elements: ["tire", "wheel", "box"],
    },
    {
      name: "Truck",
      description: "this is a beautiful",
      image_url:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      elements: ["tire", "wheel", "box"],
    },
  ];

  const { theme } = useTheme();

  const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
    },
    listConatiner: {
      justifyContent: "center",
      flex: 1,
    },
    backGound: {
      flex: 1,
      alignContent: "center",
    },
  });

  return (
    <SafeAreaView style={styles.backGound}>
      <View style={styles.listConatiner}>
        <FlatList
       contentContainerStyle={{ alignItems: "center" }}
          data={blueprints}
          renderItem={({ item }) => <BlueprintItem data={item} navigation={navigation}/>}
        />
      </View>
      <Button color={theme.colors.secondary} title="Sell" onPress={() => navigation.navigate('Sell')}/>
    </SafeAreaView>
  );
}

export default BlueprintScreen;
