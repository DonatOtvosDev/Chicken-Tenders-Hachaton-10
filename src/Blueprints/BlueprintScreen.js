import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  ActivityIndicator,
} from "react-native";

import axios from "axios";

import BlueprintItem from "./BlueprintItem";

import { useTheme } from "../ThemeProvider";

function BlueprintScreen({ navigation }) {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState()

  const fetchData = async () => {
    try {
      setIsLoading(true); 
      const response = await axios.get("https://chickentenders-10-backend.onrender.com/get_blueprints");
      setData(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false); // Stop loading
    }
  };


  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means this runs only once when the component is mounted


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
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.listConatiner}>
            <FlatList
            refreshing={isLoading}
            onRefresh={() => fetchData()}
              contentContainerStyle={{ alignItems: "center" }}
              data={data}
              renderItem={({ item }) => (
                <BlueprintItem data={item} navigation={navigation} />
              )}
            />
          </View>
          <Button
            color={theme.colors.secondary}
            title="Sell"
            onPress={() => navigation.navigate("Sell")}
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default BlueprintScreen;
