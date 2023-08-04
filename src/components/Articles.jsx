import { View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import React from "react";

import articleStyle from "./ArticlesStyle";

const Articles = (props) => {

    const navigation = useNavigation();
  
    

    const handleImagePress = (url) => {
        navigation.navigate("ArticleDetails", { url });
    };
    const handleSubnewsPress = (subnews) => {
        navigation.navigate("ShowSubnews", { subnews: subnews });
      };

    return(
        <>
            <FlatList 
            data={props.data}
            renderItem={({item}) =>(
                <View>
                
                    <View style={articleStyle.fstContainer}>
                    <TouchableOpacity onPress={() => handleImagePress(item.newsUrl)}>
                        {/* image*/}
                        <View>
                            {item.images?(<Image
                            source={{ uri: item.images.thumbnail }}
                            style={articleStyle.image}
                            />)
                        :(<Ionicons name="image-outline" size={24} color="gray" />)}
                            {/* title */}
                            <View style={articleStyle.titleContainer}>
                                <Text style={articleStyle.title}>{item.title}</Text>
                            </View>

                           
                        </View>
                        <View>
                            <Text style={articleStyle.snippet}>{item.snippet}</Text>
                        </View>
                        <View style={articleStyle.sndContainer}>
                           
                            <Text style={articleStyle.publisher} >By: <Text style={articleStyle.publisherName}>{item.publisher}</Text></Text>
                            <Text style={articleStyle.date}>{new Date(Number(item.timestamp)).toLocaleDateString()}</Text>
                           
                        </View> 
                        </TouchableOpacity>
                        <View>
                            {item.hasSubnews && (
                            <View style={articleStyle.subNewsContainer}>
                                <TouchableOpacity onPress={() => handleSubnewsPress(item.subnews)}>
                                {/* Render the specific part you want to make clickable */}
                                <Text style={articleStyle.date}>Show Subnews</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                        </View>
                       
                       
                    </View>
            
                
                </View>

            )}
        />
      
        
        </>
    )
}

export default Articles;

