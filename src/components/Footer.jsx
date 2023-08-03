import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState('newspaper-outline');

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={footerStyle.container}>
      <View style={footerStyle.categoryIconsContainer}>
        <TouchableOpacity
          style={[
            footerStyle.categoryIcon,
            activeIcon === 'newspaper-outline' && footerStyle.activeIcon,
          ]}
          onPress={() => handleIconPress('newspaper-outline')}
        >
          <Ionicons
            name="newspaper-outline"
            size={20}
            color={activeIcon === 'newspaper-outline' ? 'red' : 'black'}
          />
          <Text style={footerStyle.categoryName}>Latest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            footerStyle.categoryIcon,
            activeIcon === 'business-outline' && footerStyle.activeIcon,
          ]}
          onPress={() => handleIconPress('business-outline')}
        >
          <Ionicons
            name="business-outline"
            size={20}
            color={activeIcon === 'business-outline' ? 'red' : 'black'}
          />
          <Text style={footerStyle.categoryName}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            footerStyle.categoryIcon,
            activeIcon === 'medkit-outline' && footerStyle.activeIcon,
          ]}
          onPress={() => handleIconPress('medkit-outline')}
        >
          <Ionicons
            name="medkit-outline"
            size={20}
            color={activeIcon === 'medkit-outline' ? 'red' : 'black'}
          />
          <Text style={footerStyle.categoryName}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            footerStyle.categoryIcon,
            activeIcon === 'football-outline' && footerStyle.activeIcon,
          ]}
          onPress={() => handleIconPress('football-outline')}
        >
          <Ionicons
            name="football-outline"
            size={20}
            color={activeIcon === 'football-outline' ? 'red' : 'black'}
          />
          <Text style={footerStyle.categoryName}>Sports</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
  },
  categoryIconsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  categoryIcon: {
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
