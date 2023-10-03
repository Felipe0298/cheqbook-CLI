import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';

const FlatListScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      text: 'Slide 1: Swipe to learn more',
      image: require('../../assets/greencheck.png'),
    },
    {
      text: 'Slide 2: Swipe to learn more',
      image: require('../../assets/bluecheck.png'),
    },
    {
      text: 'Slide 3: Swipe to learn more',
      image: require('../../assets/blackcheck.png'),
    },
  ];

  return (
    <View style={styles.container} testID='flat-list'>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage} />
            <View style={styles.textContainer}>
              <Text style={styles.slideText}>{item.text}</Text>
            </View>
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offset / windowWidth);
          handleSwipe(index);
        }}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: 200,
    height: 200,
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FlatListScreen;
