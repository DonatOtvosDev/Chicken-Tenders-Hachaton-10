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

import { useTheme } from "./ThemeProvider";
import CustomImagePicker from "./ImagePicker";

function MainScreen({ navigation }) {
  const { theme } = useTheme();

  const [imageUri, setImage] = useState(null);

  const styles = StyleSheet.create({
    background: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <SafeAreaView style={styles.background}>
      <CustomImagePicker image={imageUri} setImage={setImage} />
      <View>
      
        <Button
          title="Search"
          onPress= {() => {
            navigation.navigate("Result", imageUri);
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;
