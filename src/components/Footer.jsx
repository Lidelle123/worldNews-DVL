import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Footer = ({ categories, activeCategory, setActiveCategory }) => {

    
  return (
    <View style={footerStyle.container}>
      {categories.map((category,index) => (
        <TouchableOpacity
          key={category.name}
          style={[
            footerStyle.categoryIcon,
            activeCategory === category.name && footerStyle.activeIcon,
          ]}
          onPress={() => {
            setActiveCategory(category.name, index); // Pass the category index
          }}
        >
          <Ionicons
            name={category.icon}
            size={20}
            color={activeCategory === category.name ? 'red' : 'black'}
          />
          <Text style={footerStyle.categoryName}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  categoryIcon: {
    flex: 1,
    alignItems: 'center',
  },
  activeIcon: {
    color: 'red',
  },
  categoryName: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
});

export default Footer;
