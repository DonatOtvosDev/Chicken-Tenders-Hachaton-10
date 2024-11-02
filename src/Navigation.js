import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme } from "./ThemeProvider";

import MainScreen from "./MainScreen";

const Stack = createNativeStackNavigator();

function CustomNavigation() {
  const { theme } = useTheme(); // Now this will work because it's inside ThemeProvider

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Main"
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
        <Stack.Screen 
        name="Main" 
        component={MainScreen}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigation;
