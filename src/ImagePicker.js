import { Image, View, StyleSheet, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { useTheme } from "./ThemeProvider";

function CustomImagePicker({ image, setImage }) {
  const { theme } = useTheme();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      cameraType: "front",
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const defaultStyles = StyleSheet.create({
    container: {
      height: "50%",
      width: "100%",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      margin: 10,
    },

    button: {
      borderColor: theme.colors.secondary,
      borderWidth: 2,
      margin: 5,
    },
    image: {
      width: 300,
      height: 300,
      margin: 10,
    },

    row: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });

  return (
    <View style={defaultStyles.container}>
      <Image
        source={image == null ? require("../assets/icon.png") : { uri: image }}
        style={defaultStyles.image}
      />

      <View style={defaultStyles.row}>
        <Button
          title={"Gallery"}
          onPress={() => pickImage()}
          style={defaultStyles.button}
        />
        <Button
          title={"Take Photo"}
          onPress={() => takeImage()}
          style={defaultStyles.button}
        />
      </View>
    </View>
  );
}

export default CustomImagePicker;
