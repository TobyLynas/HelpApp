import React from "react";
import HomePage from "./app/screens/HomePage.js";
import PlanPage from "./app/screens/PlanPage.js";
import ContactsPage from "./app/screens/ContactsPage.js";
import EmergencyActivePage from './app/screens/EmergencyActivePage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homeRoute" component={HomePage} />
        <Stack.Screen name="planRoute" component={PlanPage} />
        <Stack.Screen name="contactsRoute" component={ContactsPage} />
        <Stack.Screen name= "emergencyActiveRoute" component={EmergencyActivePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
