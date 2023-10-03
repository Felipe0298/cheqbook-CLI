import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

interface LogoHeaderProps {
  logoWidthPercentage: number;
  style?: object;
}

const logo = require('../../assets/cheqbook-logo.png');


const CheqbookLogoHeader: React.FC<LogoHeaderProps> = ({ logoWidthPercentage, style }) => {
  const screenWidth = Dimensions.get('window').width;
  const logoWidth = (screenWidth * logoWidthPercentage) / 100;

  const [logoHeight, setLogoHeight] = useState(0);

  useEffect(() => {
    Image.getSize(Image.resolveAssetSource(logo).uri, (width, height) => {
      const calculatedHeight = (logoWidth * height) / width;
      setLogoHeight(calculatedHeight);
    });
  }, []);

  return (
    <View style={[styles.container, style]} testID='cheqbook-logo'>
      <Image
        source={logo}
        style={{ width: logoWidth, height: logoHeight, resizeMode: 'contain'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default CheqbookLogoHeader;
