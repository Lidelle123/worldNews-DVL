import React from "react";
import { Modal, View,ScrollView, Text, Button, StyleSheet, Image, Dimensions } from "react-native";

const SubnewsModal = ({ isVisible, onClose, subnews, hasSubnews }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <ScrollView style={styles.modalContainer}>
        {/* Display subnews content here */}
        {hasSubnews ?(subnews.map((subnewsItem, index) => (
          <View key={index} style={styles.subnewsContainer}>
            {subnewsItem.images?( <Image
                            source={{ uri: subnewsItem.images.thumbnail }}
                            style={{height: 200,
                                width: Dimensions.get("window").width - 50,
                                borderTopLeftRadius:30,
                                borderTopRightRadius:30,}}
                            />)
                            :(<Image></Image>)}
                            {/* title */}
                            <View>
                                <Text>{subnewsItem.title}</Text>
                            </View>
            <Text style={styles.subnewsTitle}>{subnewsItem.title}</Text>
            <Text style={styles.subnewsSnippet}>{subnewsItem.snippet}</Text>
            <Text style={styles.subnewsPublisher}>{subnewsItem.publisher}</Text>
            
          </View>
        ))):
        (<Text>No Subnews</Text>)}

        <Button title="Close" onPress={onClose} />
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    
    backgroundColor: "white",
    padding: 20,
  },
  subnewsContainer: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subnewsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subnewsSnippet: {
    fontSize: 14,
  },
  subnewsPublisher: {
    fontSize: 12,
  },
});

export default SubnewsModal;
