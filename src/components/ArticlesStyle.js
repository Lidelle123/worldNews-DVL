import React from "react";
import { StatusBar, StyleSheet, Dimensions, Platform } from "react-native";

const articlesStyle = StyleSheet.create({
  fstContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "baseline",
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
  image: {
    height: 200,
    width: Dimensions.get("window").width - 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //borderRadius:30,
  },
  title: {
    fontSize: 18,
    //fontWeight: '800',
    marginTop: 3,
    color: "white",
    marginLeft: 10,
    marginRight: 10,
  },
  snippet: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 10,
  },
  sndContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
    //marginLeft: 10,
    padding: 10,
    //marginRight: 25,
  },
  publisher: {
    fontSize: 15,
  },
  publisherName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 15,
  },
  source: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  sourceUrl: {
    //color: '#1e90ff',
    color: "blue",
    textDecorationLine: "underline",
    marginRight: 10,
  },

  titleContainer: {
    position: "absolute",
    top: "50%", // Center vertically on the image
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  subNewsContainer: {
    padding: 10,
  },
});
export default articlesStyle;
