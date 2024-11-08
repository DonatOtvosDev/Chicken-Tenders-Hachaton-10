import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BlueprintItem from "./BlueprintItem";

import { useTheme } from "../ThemeProvider";

function BlueprintScreen() {
  const blueprints = [
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
      backgroundColor: "#333",
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
      <Text style={styles.titleText}>Blueprints</Text>

      <View style={styles.listConatiner}>
        <FlatList
       contentContainerStyle={{ alignItems: "center" }}
          data={blueprints}
          renderItem={({ item }) => <BlueprintItem data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default BlueprintScreen;
