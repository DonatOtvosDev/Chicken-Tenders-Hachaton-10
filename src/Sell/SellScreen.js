import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import { Picker } from '@react-native-picker/picker';

import { useTheme } from "../ThemeProvider";
import CustomImagePicker from "../ImagePicker";

function SellScreen({ navigation }) {
  const { theme } = useTheme();

  const [imageUri, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const styles = StyleSheet.create({
    background: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },

    inputStyle: {
      width:"100%",
      backgroundColor: "#fff",
      padding: 10,
      margin: 8,
      width: "80%",
      borderRadius: 20,
      borderBlockColor: "#000",
      borderWidth: 1,
    }
  });

  return (
    <SafeAreaView style={styles.background}>
      <CustomImagePicker image={imageUri} setImage={setImage} />
      <Button title="Recognise" onPress={() => navigation.navigate("Result", imageUri)}
      />
      <TextInput
      value={name}
      placeholder="Name"
      onChangeText={setName}
      style={styles.inputStyle}
      />
      <TextInput
      value={price}
      placeholder="Price"
      onChangeText={setPrice}
      keyboardType="numeric"
      style={styles.inputStyle}
      />
      <Button title="Sell"/>
    </SafeAreaView>
  );
}

export default SellScreen;
