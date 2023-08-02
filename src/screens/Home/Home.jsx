
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import HomeStyles from "./HomeStyle";
import Articles from "../../components/Articles.jsx";
import Header from "../../components/Header.jsx";
import { useNavigation } from "@react-navigation/native";
import { data } from "../../../backend";


const Home = () => {
    const navigation = useNavigation();
    return (
      <>
            <View style={HomeStyles.container} >
            <Header/>
                <Articles data={data} />
            </View>
        </>
    )
}
export default Home;

