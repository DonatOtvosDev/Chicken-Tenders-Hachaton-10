import React, { useState, useEffect} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from "react-native";

import ShopItem from "./ShopItem";

import { useTheme } from "../ThemeProvider";
import axios from "axios";

function ShopScreen({route}) {
  const {name} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState()

  const fetchData = async () => {
    try {
      setIsLoading(true); 
      const response = await axios.get(`https://chickentenders-10-backend.onrender.com/get_items/${name}`);
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
    {isLoading ? (<ActivityIndicator />) : (<><Text style={styles.titleText}>{name}</Text>
      <View style={styles.listConatiner}>
        <FlatList
          contentContainerStyle={{ alignItems: "center"}}
          data={data}
          renderItem={({ item }) => <ShopItem data={item} />}
        />
      </View></>)}
   
    </SafeAreaView>
  );
}

export default ShopScreen;
