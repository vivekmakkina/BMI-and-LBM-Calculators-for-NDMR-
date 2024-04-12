import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons from Expo

const Dashboard = ({ navigation }) => {
  const handleBMIPress = () => {
    navigation.navigate('Calculator');
  };

  const handleLMBPress = () => {
    navigation.navigate('Calculator2'); // Navigate to Calculator2 screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/4586984/pexels-photo-4586984.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.image}
      />
      <View style={styles.outerBox}>
        <View style={[styles.con1, {backgroundColor: 'white'}]}>
          <TouchableOpacity style={styles.button} onPress={handleBMIPress}>
            <View>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvdhDHiRUHL5rDazIbcESKA6_qNI2xjaNlQ&usqp=CAU' }}
                style={styles.circle}
              />
            </View>
            <Text style={styles.buttonText}>BODY MASS INDEX</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.con2, {backgroundColor: 'white'}]}>
          <TouchableOpacity style={styles.button} onPress={handleLMBPress}>
            <View>
              <Image
                source={{ uri: 'https://pbs.twimg.com/profile_images/378800000400487633/57af26a308edcd7707b60dc24837c302_400x400.jpeg' }}
                style={styles.circle}
              />
            </View>
            <Text style={styles.buttonText}>LEAN BODY MASS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  image: {
    width: 370,
    height: 250, // Increased image height
    marginBottom: 20,
    borderWidth: 0.8,
    borderColor: 'black',
    
  },
  outerBox: {
    width: '95%', 
    backgroundColor: '#213066',
    paddingHorizontal: 25, // Keep horizontal padding
    paddingVertical: 40, // Adjust vertical padding here
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: 'black',
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  con1: {
    marginBottom: 20,
    width: '95%', // Full width
    height: 170,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 12, 
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,// Adjusted height
  },
  con2: {
  marginBottom: 10,
  marginTop: 20, // Add margin to move it down
  width: '95%', // Full width
  height: 170,
  borderWidth: 1.5,
  borderColor: 'black',
  borderRadius: 12, 
  shadowColor: '#000', // Shadow color
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

  button: {
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: '#333',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
    
  },
  buttonText: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color with transparency
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 3, // Shadow radius
  },  
});

export default Dashboard;
