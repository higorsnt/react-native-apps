import firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyBHf1wLAt649mkl0K-7nwY3UVXfCV6Mm_I",
	authDomain: "zapzap-9fc57.firebaseapp.com",
	databaseURL: "https://zapzap-9fc57.firebaseio.com",
	projectId: "zapzap-9fc57",
	storageBucket: "zapzap-9fc57.appspot.com",
	messagingSenderId: "800570007841",
	appId: "1:800570007841:web:1f703f91c999d10c839e60",
	measurementId: "G-ZT8729Q5R2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;