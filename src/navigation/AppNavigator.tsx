import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/* navigator */
import { MainTabNavigator } from "./MainTabNavigator";
/* screens */
import { AuthScreen } from "../screens/AuthScreen";

export const AppNavigator = () => {
  const user = null;
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};