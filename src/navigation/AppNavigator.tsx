import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigator */
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};