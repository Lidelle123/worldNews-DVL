import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from  "../screens/Home/Home.jsx";
import React from "react";
import ArticleDetails from "../screens/ArticlesDetails/ArticleDetails.jsx";
import ShowSubnews from "../screens/Subnews/ShowSubnews.jsx";
import SubnewsDetails from "../screens/Subnews/SubnewsDetails.jsx";

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
                <Stack.Screen
                    name="ShowSubnews"
                    component={ShowSubnews}
                    options={{ headerShown: false }} 
                />
                 <Stack.Screen
                    name="SubnewsDetails"
                    component={SubnewsDetails}
                    options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index