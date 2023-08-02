import { StyleSheet, Dimensions, StatusBar } from "react-native";

const ArticleDetailsStyle= StyleSheet.create({

    hearderContainer:{
        flexDirection: 'row',
        backgroundColor: "#fff",
        width:Dimensions.get("window").width,
        padding:15,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight + 10,
        alignSelf:'flex-start'
    },

    hearderIcon:{
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default ArticleDetailsStyle