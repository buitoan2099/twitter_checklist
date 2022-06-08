import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { HomeView } from "../views/homeView";
import UsersView from "../views/usersView";
import { Routes } from "./routes";

const Stack = createNativeStackNavigator();

export default function RootLine() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.USERS}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={Routes.HOME} component={HomeView} />
                <Stack.Screen name={Routes.USERS} component={UsersView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




