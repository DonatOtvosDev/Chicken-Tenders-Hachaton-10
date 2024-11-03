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
      formData.append("upload_preset", "default");
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
        console.log(response.status)
        url = response.data.url;
        console.log(url)

        lens_resposne = await axios.get("https://serpapi.com/search.json", {
          params: {
            engine: "google_lens",
            url: url,
            api_key: secrets.GoogleApiKey,
          },
        });
        const regex = new RegExp("\\b[a-zA-Z]+\\b", "g");

        vm = lens_resposne.data.visual_matches;
        appearance_count = {};
        for (let i = 0; i < vm.length; i++) {
          words = vm[i].title.match(regex);
          if (words == null) {
            continue;
          }
          for (let i = 0; i < words.length; i++) {
            word = words[i].toLowerCase();
            if (word.length < 3) {
              continue;
            }
            appearance_count[word] = (appearance_count[word] || 0) + 1;
          }
        }

        obj = Object.entries(appearance_count);
        obj.sort((a, b) => b[1] - a[1]);

        top_match = [];
        top_text = "";
        for (let i = 0; i < 4; i++) {
          top_match.push(obj[i][0]);
          top_text += ` ${obj[i][0]}`;
        }
        console.log(top_match);

        console.log(top_text)
        
        llm_response = await axios.post(
          secrets.LLMUrl,

          
        {
              text: top_text,
            },
            {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${secrets.LLMToken}`,
            },
          }
        );

        console.log(`${secrets.LLMUrl}/${llm_response.data.id}/`,)
        generated = false
        while (!generated) {
        llm_response = await axios.get(
            `${secrets.LLMUrl}${llm_response.data.id}/`,
              {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${secrets.LLMToken}`,
              },
            }
          );
        console.log(llm_response.data.content);
        if (llm_response.data.content.status != "running") {
            generated = true
        }
    }
    console.log(llm_response.data.content.results.VERYLASTFIELD);
    setData(llm_response.data.content.results.VERYLASTFIELD.results[0].generated_text);
    

      } catch (err) {
        console.log(err);
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
      <Text>
        {data}
      </Text>
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
