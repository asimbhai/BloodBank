// const TodoList = document.getElementById('list')



const names = {
    userName: "Bilal",
    firstName: "Bilal",
    lastName: "Ahmad ali"
}
var config = {
    apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
    authDomain: "react-todo-31aff.firebaseapp.com",
    databaseURL: "https://react-todo-31aff.firebaseio.com",
    storageBucket: "react-todo-31aff.appspot.com",
    messagingSenderId: "431679818811"
};
firebase.initializeApp(config);
var date = firebase.database().ref('root')
date.set({
    Names: names

})