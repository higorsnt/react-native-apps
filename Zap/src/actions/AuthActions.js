import firebase from '../services/firebaseConnection';

import * as Actions from '../constants';

export const checkLogin = async () => {
	return (dispatch) => {
		let user = firebase.auth().currentUser;

		if (user) {
			dispatch({
				type: Actions.CHANGE_STATUS,
				payload: {
					status: true,
				}
			});
		} else {
			dispatch({
				type: Actions.CHANGE_STATUS,
				payload: {
					status: false,
				}
			});
		}
	}
};

export const changeName = (name) => {
	return {
		type: Actions.CHANGE_NAME,
		payload: {
			name
		}
	}
};

export const changeEmail = (email) => {
	return {
		type: Actions.CHANGE_EMAIL,
		payload: {
			email
		}
	}
};

export const changePassword = (password) => {
	return {
		type: Actions.CHANGE_PASSWORD,
		payload: {
			password
		}
	}
};

export const signUpAction = (name, email, password) => {
	return async (dispatch) => {
		let { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
		.catch((error) => {
			switch (error.code) {
				case 'auth/email-already-in-use':
					alert('Email já cadastrado!')
					break;
				case 'auth/invalid-email':
					alert('Email inválido');
					break;
				case 'auth/operation-not-allowed':
					alert('Ocorreu algum problema no nosso sistema. Tente novamente mais tarde!');
					break;
				case 'auth/week-password':
					alert('Senha muito fraca... Escolha uma outra senha!');
					break;
				default:
					alert('Algum erro desconhecido ocorreu! Tente novamente mais tarde!');
					break;
			}
		});
		
		let { uid } = user;
		firebase.database().ref('users').child(uid).set({
			name
		});

		dispatch({
			type: Actions.REGISTERED_USER,
			payload: {
				uid
			}
		});
	};
};

export const signInAction = (email, password) => {
	return async (dispatch) => {
		let { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
		.catch((error) => {
			switch (error.code) {
				case 'auth/invalid-email':
					alert('Email inválido!');
					break;
				case 'auth/user-disabled':
					alert('Seu usuário está desativado!');
					break;
				case 'auth/user-not-found':
					alert('Usuário não cadastrado!');
					break;
				case 'auth/wrong-password':
					alert('Email e/ou senha incorretos!');
					break;
			}
		});

		let { uid } = user;

		dispatch({
			type: Actions.LOGGED_USER,
			payload: {
				uid
			}
		});
	}
}