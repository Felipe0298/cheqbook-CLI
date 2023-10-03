import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

interface LogoHeaderProps {
  logoWidthPercentage: number;
}

const CheqbookLogoHeader: React.FC<LogoHeaderProps> = ({ logoWidthPercentage }) => {
  const screenWidth = Dimensions.get('window').width;
  const logoWidth = (screenWidth * logoWidthPercentage) / 100;

  return (
    <View style={styles.container} testID='cheqbook-logo'>
      <Image
        source={require('../../assets/cheqbook-logo.png')}
        style={{ width: logoWidth, resizeMode: 'contain' }}
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
