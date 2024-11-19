import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";

import { useTheme } from "../ThemeProvider";
import CustomImagePicker from "../ImagePicker";
import axios from "axios";
import mime from "mime";

function SellScreen({ navigation }) {
  const { theme } = useTheme();

  const [isLoading, setIsloading] = useState(false);

  const [imageUri, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState();

  const recogniseImage = async () => {
    console.log("clicked");
    if (imageUri == null) {
      return;
    }
    setIsloading(true);

    const newImageUri = "file:///" + imageUri.split("file:/").join("");

    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: "image.jpeg",
    });

    try {
      const response = await axios.post(
        "https://chickentenders-10-backend.onrender.com/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );
      console.log(response.data);
      setName(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setIsloading(false);
  };

  const uploadItem = async () => {
    if (imageUri == null) {
      return;
    } else if (price == null) {
      return;
    } else if (name == null) {
      return;
    }
    setIsloading(true);

    const newImageUri = "file:///" + imageUri.split("file:/").join("");

    const formData = new FormData();
    formData.append("name", name)
    formData.append("price", price)
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: "image.jpeg",
    });


    try {
      const response = await axios.post(
        "https://chickentenders-10-backend.onrender.com/upload_item",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      )
      if (response.status == 200) {
      setImage(null),
      setName(null),
      setPrice(null)
      }
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }

    setIsloading(false)
  };

  const styles = StyleSheet.create({
    background: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },

    inputStyle: {
      width: "100%",
      backgroundColor: "#fff",
      padding: 10,
      margin: 8,
      width: "80%",
      borderRadius: 20,
      borderBlockColor: "#000",
      borderWidth: 1,
    },
  });

  return (
    <SafeAreaView style={styles.background}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <CustomImagePicker image={imageUri} setImage={setImage} />
          <Button title="Recognise" onPress={() => recogniseImage()} />
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
          <Button title="Sell" onPress={() => uploadItem()}/>
        </>
      )}
    </SafeAreaView>
  );
}

export default SellScreen;
