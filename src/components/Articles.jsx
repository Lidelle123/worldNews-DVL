import { View, Text, StyleSheet, Image, Dimensions, Platform, FlatList, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Articles = (props) => {

    const navigation = useNavigation();

    const handleImagePress = (url) => {
        navigation.navigate("ArticleDetails", { url });
    };

 

    

    return(
        <>
        <FlatList 
            data={props.data}
            renderItem={({item}) =>(
                <TouchableOpacity onPress={() => handleImagePress(item.newsUrl)}>
                    <View style={articleStyle.fstContainer}>
                        {/* image*/}
                        <View>
                            <Image
                            source={{ uri: item.images.thumbnail }}
                            style={articleStyle.image}
                            />
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
                    </View>
                        
                    {/*    

                        {/* source* 
                        <View style={{ marginTop: 10 }}>
                            <Text style={articleStyle.source}>Source: 
                                <Text style={articleStyle.sourceUrl} onPress={handleLinkPress}>{item.newsUrl}</Text>
                            </Text>
                        </View>     
                        </View>*/}
                    {/* snippet: fragment */}
                    
            
                </TouchableOpacity>
            )}
        />
        </>
    )
}

const articleStyle = StyleSheet.create({
    fstContainer: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 15,
        marginRight: 25,
        marginLeft: 25,
        borderRadius: 30,
        backgroundColor: "#f0f0f0",
        shadowColor: "#808080",
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        ...Platform.select({
          android: {
            elevation: 50,
          },
        }),
    },
    image : {
        height: 200,
       width: Dimensions.get("window").width - 50,
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
       //borderRadius:30,
       
    },
    title : {
        fontSize: 18,
        //fontWeight: '800',
        marginTop: 3,
        color:'white',
    },
    snippet: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
    },
    sndContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        padding: 10

    },
    publisher: {
        fontSize: 15,

    },
    publisherName: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    date: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 15,

    },
    source: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    sourceUrl: {
        //color: '#1e90ff',
        color: "blue",
        textDecorationLine: "underline",
    },

    titleContainer: {
        position: "absolute",
        top: "50%", // Center vertically on the image
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
      },
      
    
  

})

export default Articles;

