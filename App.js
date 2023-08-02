import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Index from "./src/screens/Index.jsx";


export default function App() {
  return (
    <View style={styles.container}>
       {/* <StatusBar style="auto" /> */}
       <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    justifyContent: "center",
  },
});
