import React, { useState, useRef } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Header from '../../components/Header.jsx';
import Articles from '../../components/Articles.jsx';
import Footer from '../../components/Footer';
import {data} from '../../../backend/useFetch.js';
import {categories} from '../../../backend/dataByCategory.js'
import HomeStyles from './HomeStyle.js';


const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Latest');
  //const activeCategoryData = categories.find(category => category.name === activeCategory).data;
  const windowWidth = Dimensions.get('window').width;

   // Create a ref for the ScrollView
   const scrollViewRef = useRef();

   // Handle category selection
   const handleCategorySelect = (categoryName, categoryIndex) => {
     setActiveCategory(categoryName);
 
     // Scroll to the selected category
     scrollViewRef.current.scrollTo({ x: categoryIndex * windowWidth, animated: true });
   };
 
  
  return (
    <View style={HomeStyles.container}>
      <Header />
      <ScrollView
       ref={scrollViewRef} // Assign the ref to the ScrollView
        horizontal
        pagingEnabled
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const page = Math.round(offsetX / windowWidth);
          setActiveCategory(categories[page].name);
        }}
        showsHorizontalScrollIndicator={false}
      >
       {/*  {categories.map((category, index) => (
          <View key={category.name} style={{ width: windowWidth }}>
            {category.name === activeCategory && (
              <Articles data={activeCategoryData} />
            )}
          </View>
        ))} */}
         {categories.map((category, index) => (
          <View key={category.name} style={{ width: windowWidth }}>
            <Articles
              data={category.name === activeCategory ? category.data : []}
            />
          </View>
        ))}
      </ScrollView>
      <Footer
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={handleCategorySelect}
        
      />
    </View>
  );
};

export default Home;
