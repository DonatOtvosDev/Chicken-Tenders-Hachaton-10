import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

import { useTheme } from "./ThemeProvider";

function MainScreen() {
    const { theme } = useTheme();

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
        <Text>Hello World</Text>
    </SafeAreaView>
  );
}

export default MainScreen;
