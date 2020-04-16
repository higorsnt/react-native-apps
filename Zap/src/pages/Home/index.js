import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

//import { styles } from './styles';

export default function Home() {

  const status = useSelector(state => state.auth.status);
  const navigation = useNavigation();

  function login() {
    navigation.navigate('Signin');
  }

  function register() {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle="light-content" backgroundColor="transparent" />
      <Image source={ require('../../assets/icon/icon.png') } style={styles.logo} />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d820f',
  },
  logo: {
    width: 200,
    height: 200 
  },
  buttonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  button: {
    width: 150,
    height: 55,
    backgroundColor: '#04a607',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})
