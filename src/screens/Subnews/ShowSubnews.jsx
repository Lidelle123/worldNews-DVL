import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ArticleDetailsStyle from "../ArticlesDetails/ArticleDetailsStyle";
import articlesStyle from "../../components/ArticlesStyle";

const ShowSubnews = ({ navigation, route }) => {
  const { subnews } = route.params;
  console.log(subnews);

  const handleUrlPress = (url) => {
        navigation.navigate("SubnewsDetails", { url });
    };

  return (
    <>
        <View style={ArticleDetailsStyle.hearderContainer}>
        <View style={ArticleDetailsStyle.hearderIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex:1, marginBottom:10}}>
      <ScrollView >
            {subnews.map((subnewsItem, index) => (
                
                <View key={index} style={articlesStyle.fstContainer}>
                        {/* image*/}
                        <View>
                            {subnewsItem.images?(<Image
                            source={{ uri: subnewsItem.images.thumbnail }}
                            style={articlesStyle.image}
                            />)
                        :(<Ionicons name="image-outline" size={24} color="gray" />)}
                            {/* title */}
                            <View style={articlesStyle.titleContainer}>
                                <Text style={articlesStyle.title}>{subnewsItem.title}</Text>
                            </View>

                           
                        </View>
                        <View>
                            <Text style={articlesStyle.snippet}>{subnewsItem.snippet}</Text>
                        </View>
                        <View style={articlesStyle.sndContainer}>
                           
                            <Text style={articlesStyle.publisher} >By: <Text style={articlesStyle.publisherName}>{subnewsItem.publisher}</Text></Text>
                            <Text style={articlesStyle.date}>{new Date(Number(subnewsItem.timestamp)).toLocaleDateString()}</Text>   
                        </View> 
                        <View style={{ padding:10 }}>
                              <TouchableOpacity onPress={() => handleUrlPress(subnewsItem.newsUrl)}>
                                <Text style={articlesStyle.source} >Source: <Text style={articlesStyle.sourceUrl}>{subnewsItem.newsUrl}</Text></Text>
                              </TouchableOpacity>
                        </View>
                       
                       
                    </View>
                
        ))}
        </ScrollView>
        </View>
        
    </>
  );
};

export default ShowSubnews;
