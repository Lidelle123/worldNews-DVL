import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text } from "react-native";
import Home from  "../screens/Home/Home.jsx";
import React from "react";
import ArticleDetails from "../screens/ArticlesDetails/ArticleDetails.jsx";

const Stack = createNativeStackNavigator();

const Index = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ArticleDetails"
                    component={ArticleDetails}
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index