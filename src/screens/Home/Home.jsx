
import { View, Text, ActivityIndicator } from "react-native";

import HomeStyles from "./HomeStyle";
import Articles from "../../components/Articles.jsx";
import Header from "../../components/Header.jsx";
import React, { useState } from "react";
import {data} from "../../../backend/useFetch";
import Footer from "../../components/Footer";


const Home = () => {
   // const { data, isLoading, error, refetch } = useFetch();
    //const navigation = useNavigation();
    
    return (
      <>
        
            <View style={HomeStyles.container} >
            <Header/>
            <Articles data={data} />
            {/* {isLoading ? (
                <ActivityIndicator size="large" color="blue" /> // Display ActivityIndicator while loading
            ) : (
                <Articles data={data} />
            )}*/}
            </View>
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                <Footer/>
            </View>
        </>
    )
}
export default Home;

