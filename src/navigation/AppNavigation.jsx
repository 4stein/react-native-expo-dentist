import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, PatientScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Patient"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eee',
            elevation: 0.8, // remove shadow on Android
            shadowOpacity: 0.8, // remove shadow on iOS
            borderBottomWidth: 0.8,
          },
          headerTintColor: '#2A86FF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Patients' }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{ title: 'Patient Card' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}