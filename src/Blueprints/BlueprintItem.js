import React from "react";

import { useTheme } from "../ThemeProvider";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function BlueprintItem({ data, navigation }) {
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
    },
    title: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "left",
    },
    body: {
      fontSize: 16,
      textAlign: "justify",
      flex: 1,
      margin: 3,
    },
    image: {
      width: "100",
      height: 200,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    contentContainer: {
      padding: 10,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listConatiner: {
      flex: 1,
      margin: 4,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3, // Circular dot
      backgroundColor: "#000", // Dot color
      marginRight: 10,
    },
    itemText: {
      fontSize: 16,
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
  });

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: data["image_url"] }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data["name"]}</Text>
        <View style={styles.row}>
          <Text style={styles.body}>{data["description"]}</Text>
          <View style={styles.listConatiner}>
            <FlatList
              data={data["elements"]}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Shop', {"name" : item})}>
                    <View style={styles.listItem}>
                      <View style={styles.dot} />
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default BlueprintItem;
