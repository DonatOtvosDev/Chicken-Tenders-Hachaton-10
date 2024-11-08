import React from "react";

import { useTheme } from "../ThemeProvider";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

function ShopItem({ data }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    card: {
      width: "90%",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      backgroundColor: "#fff",
      shadowRadius: 4,
      elevation: 4,
      margin: 8,
      alignSelf: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "left",
      flex: 1,
    },
    body: {
      fontSize: 16,
      textAlign: "justify",
      margin: 3,
      flex: 1,
    },
    image: {
      height: 200,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  
    row: {
      flexDirection: "row",
      padding:10,
      width: "100%",
    },
  });

  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image_url }} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title}>Price: ${data.price}</Text>
        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    </View>
  );
}

export default ShopItem;
