import {View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return(
        <View style={headerStyle.container}>
            <View style={headerStyle.iconContainer}>
                <Ionicons name="globe-outline" size={30} color="white" />
            </View>
            <View style={{ marginLeft:10 }}>
                <Text style={{ fontWeight:'bold',fontSize:20 }}>World <Text style={{ color:'red' }}>News</Text></Text>
            </View>
            <View style={headerStyle.menuIconContainer}>

                <View style={{}}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:15}} >
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={20} color="black"/>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>
    )
}

const headerStyle= StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width:Dimensions.get("window").width,
        padding:15,
        alignItems: 'center',
        marginTop: 0,
    },
    iconContainer: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 10,
      },
      menuIconContainer: {
        marginLeft: 'auto',
        flexDirection:'row',
        
        
      },
      searchContainer: {
        //marginLeft:Dimensions.get("window").width
      },
})


export default Header