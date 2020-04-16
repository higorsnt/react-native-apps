import * as Actions from '../constants';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
	uid: '',
	// undefined = o sistema ainda não foi iniciado
	// false = nenhum usuário logado
	// true = existe um usuário logado
	status: undefined,
};

export const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Actions.CHANGE_STATUS:
			return { ...state, status: action.payload.status };
			break;

		case Actions.CHANGE_NAME:
			return { ...state, name: action.payload.name };
			break;

		case Actions.CHANGE_EMAIL:
			return { ...state, email: action.payload.email };
			break;

		case Actions.CHANGE_PASSWORD:
			return { ...state, password: action.payload.password };
			break;

		case Actions.REGISTERED_USER:
			return { ...state, status: true, uid: action.payload.uid };
			break;

		case Actions.LOGGED_USER:
			return { ...state, status: true, uid: action.payload.uid };
			break;

		default:
			return state;
			break;
	}
};