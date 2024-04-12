import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!username || !password) {
      showAlert('Username and password are required.');
      return;
    }
    
    // Make API call to authenticate user
    fetch('http://192.168.40.222/vivek/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(response => response.text())
    .then(result => {
      if (result === 'success') {
        navigation.navigate('Dashboard');
      } else {
        showAlert('Invalid username or password.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showAlert('An error occurred. Please try again.');
    });
  };

  const showAlert = (message) => {
    Alert.alert('Alert', message);
  };

  const handleSignUp = () => {
    // Navigate to signup page
    navigation.navigate('Signup');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Text style={styles.title}>Welcome, Doctor</Text>
      <Text style={styles.title1}>Please Login to Continue</Text>
      <View style={styles.outerBox}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#213066' }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.account}>Not a user yet?</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={[styles.signup, { textDecorationLine: 'underline' }]}>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title1: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
  outerBox: {
    width: '80%',
    backgroundColor: '#213066', // Changed color
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 25,
    marginBottom: 30,
    borderRadius: 35,
    backgroundColor: 'white',
    width: '100%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'black',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#213066', // Changed color
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  account: {
    fontSize: 16,
    marginTop: -25,
    marginLeft: -36,
  },
  signup: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline', // Added underline style
    marginLeft: 128,
    marginTop: -24,
  }
});

export default LoginScreen;
