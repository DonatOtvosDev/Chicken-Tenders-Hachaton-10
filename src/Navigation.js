import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme } from "./ThemeProvider";

import MainScreen from "./MainScreen";
import ResultScreen from "./ResultScreen";
import BlueprintScreen from "./Blueprints/BlueprintScreen";
import ShopScreen from "./ShopScreen/ShopScreen";
import SellScreen from "./Sell/SellScreen";

const Stack = createNativeStackNavigator();

function CustomNavigation() {
  const { theme } = useTheme(); // Now this will work because it's inside ThemeProvider

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Blueprint"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen name="Sell" component={SellScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Blueprint" component={BlueprintScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigation;
