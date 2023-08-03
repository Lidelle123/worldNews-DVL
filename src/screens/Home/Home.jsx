
import React from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";

import HomeStyles from "./HomeStyle";
import Articles from "../../components/Articles.jsx";
import Header from "../../components/Header.jsx";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../../../backend/useFetch";


const Home = () => {
    const { data, isLoading, error, refetch } = useFetch();
    const navigation = useNavigation();
    return (
      <>
            <View style={HomeStyles.container} >
            <Header/>
            {isLoading ? (
                <ActivityIndicator size="large" color="blue" /> // Display ActivityIndicator while loading
            ) : (
                <Articles data={data} />
            )}
            </View>
        </>
    )
}
export default Home;

