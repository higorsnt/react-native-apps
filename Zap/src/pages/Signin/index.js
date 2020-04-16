import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//import { styles } from './styles';
import { changeEmail, changePassword, signInAction } from '../../actions/AuthActions';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {

	const status = useSelector(state => state.auth.status);
	const email = useSelector(state => state.auth.email);
	const password = useSelector(state => state.auth.password);
    
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (status) {
            navigation.navigate('Chat');
        }
    })

	function setEmail(email) {
		dispatch(changeEmail(email));
	}

	function setPassword(password) {
		dispatch(changePassword(password));
	}

	function login() {
		dispatch(signInAction(email, password));
	}

	return (
		<View style={styles.container}>
			<Text>Digite seu e-mail:</Text>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType="email-address"
			/>
			<Text>Digite sua senha:</Text>
			<TextInput
				style={styles.input}
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>
			<TouchableOpacity style={styles.button} onPress={login}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		height: 50,
		width: '80%',
		fontSize: 23,
		backgroundColor: '#DDDDDD',
	},
	button: {
		marginTop: 20,
		width: 220,
		height: 50,
		backgroundColor: '#04a607',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	}
})
