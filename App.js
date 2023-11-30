import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName= "Inicio de Sesión">
    <Stack.Screen name = "Registrarse" component = {SignUp} />
    <Stack.Screen name = "Inicio de Sesión" component = {SignIn} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}


