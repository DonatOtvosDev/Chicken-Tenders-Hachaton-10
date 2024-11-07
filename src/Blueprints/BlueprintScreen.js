import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { useTheme } from "../ThemeProvider";

function BlueprintScreen() {
    const blueprints = [
        {
            "name" : "Truck",
            "description" : "this is a beautiful",
            "components" : ["drill", "wheel", "rubber"]
        }
   ]

   const { theme } = useTheme();

   const styles = StyleSheet.create({
        titleText: {
            fontSize: 20
        }
   })

   return (
    <SafeAreaView>
        <Text style={styles.titleText}>Blueprints</Text>
        <View></View>
    </SafeAreaView>
   )
}

export default BlueprintScreen;