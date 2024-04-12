// InterfacePage.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InterfacePage = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.ellipse1}>
        <View style={styles.ellipseInside}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1JxF4uNsEYuXt4oF1-R-wqL-5-LJ0vRYg&usqp=CAU' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.ellipse2}></View>
      <View style={styles.ellipse3}></View>
      <View style={styles.ellipse4}></View>
      <View style={styles.ellipse5}></View>
      <Text style={styles.welcome}>WELCOME</Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStartPress}>
        <Text style={styles.start}>START</Text>
      </TouchableOpacity>
      <View style={styles.ellipse6}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 398,
    height: 852,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  ellipse1: {
    position: 'absolute',
    width: 258,
    height: 249,
    left: 67,
    top: 251,
    backgroundColor: '#082951',
    borderRadius: 129,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ellipseInside: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ellipse2: {
    position: 'absolute',
    width: 258,
    height: 250,
    left: -52,
    top: -54,
    backgroundColor: '#082951',
    borderRadius: 129,
  },
  ellipse3: {
    position: 'absolute',
    width: 131,
    height: 112,
    left: 323,
    top: 174,
    backgroundColor: '#082951',
    borderRadius: 65.5,
  },
  ellipse4: {
    position: 'absolute',
    width: 238,
    height: 221,
    left: 145,
    top: 675,
    backgroundColor: '#082951',
    borderRadius: 119,
  },
  ellipse5: {
    position: 'absolute',
    width: 83,
    height: 80,
    left: -6,
    top: 629,
    backgroundColor: '#082951',
    borderRadius: 41.5,
  },
  welcome: {
    position: 'absolute',
    width: 249,
    height: 55,
    left: 82,
    top: 500,
    fontSize: 48,
    lineHeight: 55,
    color: '#000000',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    // Remove fontFamily to use system font
  },
  rectangle2: {
    position: 'absolute',
    width: 135,
    height: 50,
    left: 129,
    top: 563,
    backgroundColor: '#082951',
    borderRadius: 15,
  },
  text: {
    position: 'absolute',
    width: 0,
    height: 110,
    left: 30,
    top: 228,
    fontSize: 48,
    lineHeight: 55,
    color: '#000000',
  },
  startButton: {
    position: 'absolute',
    left: 140,
    top: 565,
    width: 119,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082951',
    borderRadius: 10,
  },
  start: {
    fontSize: 24,
    lineHeight: 28,
    color: '#FFFFFF',
  },
  ellipse6: {
    position: 'absolute',
    width: 179,
    height: 177,
    left: 106,
    top: 286,
  },
});

export default InterfacePage;
