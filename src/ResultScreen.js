import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";

import { secrets } from "../assets/secrets";
import axios from "axios";
import mime from "mime";

function ResultScreen({ route }) {
  const filePath = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const newImageUri = "file:///" + filePath.split("file:/").join("");

      const formData = new FormData();
      formData.append("file", {
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: newImageUri.split("/").pop(),
      });
      formData.append("upload_preset", "default")
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/drmx3srcl/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
            },
          }
        );
        console.log(response)
        
        // Check if the response was successful
        if (response.status > 300) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON data
        const jsonData = response.data
      } catch (err) {
        // Catch and set any errors
        setError("Error fetching data");
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Show loading indicator while data is being fetched
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ea" />
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    // Show error message if there was a problem with the fetch
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.background}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    color: "#333",
  },
});

export default ResultScreen;
