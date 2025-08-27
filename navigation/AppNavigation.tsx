import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RestaurantScreen from "~/screens/RestaurantScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="Restaurant"
          options={{ headerShown: false }}
          component={RestaurantScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
