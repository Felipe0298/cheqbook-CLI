import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.slideImage} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.slideText}>{item.text}</Text>
            </View>
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const index = Math.round(offset / wp('100%'));
          handleSwipe(index);
        }}
      />
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationDot,
              currentIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: wp('50%'), 
  },
  textContainer: {
    position: 'absolute',
    bottom: hp('3.75%'), 
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText: {
    fontSize: hp('2.25%'), 
    textAlign: 'center',
    fontWeight:'700'
  },
  paginationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp('1%'),
  },
  paginationDot: {
    width: wp('2%'),
    height: wp('2%'),
    borderRadius: wp('1%'),
    marginHorizontal: wp('2%'),
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});

export default FlatListScreen;
