// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
	apiKey: "AIzaSyCHvK-6XytNVxfisFg2IPmZ-GqtWqEfSpM",
	authDomain: "hesc-12321.firebaseapp.com",
	databaseURL: "https://hesc-12321-default-rtdb.firebaseio.com",
	projectId: "hesc-12321",
	storageBucket: "hesc-12321.appspot.com",
	messagingSenderId: "289511262042",
	appId: "1:289511262042:web:8d4af2df4c1a0d305b9563",
	measurementId: "G-75DCSQX5Y6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

