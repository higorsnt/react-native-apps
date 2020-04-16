import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//import { styles } from './styles';
import { changeEmail, changePassword, changeName, signUpAction } from '../../actions/AuthActions'

export default function Signup() {

	const email = useSelector(state => state.auth.email);
	const password = useSelector(state => state.auth.password);
	const name = useSelector(state => state.auth.name);
	const dispatch = useDispatch();

	function setName(name) {
		dispatch(changeName(name));
	}

	function setEmail(email) {
		dispatch(changeEmail(email));
	}

	function setPassword(password) {
		dispatch(changePassword(password));
	}

	function register() {
		dispatch(signUpAction(name, email, password));
	}

	return (
		<View style={styles.container}>
			<Text>Digite seu nome:</Text>
			<TextInput
				style={styles.input}
				value={name}
				onChangeText={(text) => setName(text)}
			/>
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
			<TouchableOpacity style={styles.button} onPress={register}>
				<Text style={styles.buttonText}>Cadastrar</Text>
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
