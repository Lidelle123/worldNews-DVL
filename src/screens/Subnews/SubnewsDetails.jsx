import React from "react";

import { View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";


import ArticleDetailsStyle from "../ArticlesDetails/ArticleDetailsStyle";

const SubnewsDetails = ({ navigation, route }) => {
  const { url } = route.params;

  console.log(url);
  return (
    <>
      <View style={ArticleDetailsStyle.hearderContainer}>
        <View style={ArticleDetailsStyle.hearderIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </>
  );
};

export default SubnewsDetails;
