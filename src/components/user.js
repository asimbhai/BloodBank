import React, { Component } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router'
import './index.css'


// const nameList = document.getElementById()
// const names = {
//     userName : "asdfBilal",
//     firstName : "Bilal",
//     lastName : "Ahmad ali"
// }
// var config = {
//     apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
//     authDomain: "react-todo-31aff.firebaseapp.com",
//     databaseURL: "https://react-todo-31aff.firebaseio.com",
//     storageBucket: "react-todo-31aff.appspot.com",
//     messagingSenderId: "431679818811"
// };
// firebase.initializeApp(config);
// var date = firebase.database().ref('root')
// date.set({
//     Names: names

// })

class Doner extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { items: [], text: '' };

    }
    componentWillMount() {
        // const names = {
        //     userName: "Bilal",
        //     firstName: "Bilal",
        //     lastName: "Ahmad ali"
        // }
        // var config = {
        //     apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
        //     authDomain: "react-todo-31aff.firebaseapp.com",
        //     databaseURL: "https://react-todo-31aff.firebaseio.com",
        //     storageBucket: "react-todo-31aff.appspot.com",
        //     messagingSenderId: "431679818811"
        // };
        // firebase.initializeApp(config);
        // var date = firebase.database().ref('root')
        // date.set({
        //     Names: names

        // })
    }
    // componentDidMount() {
    //     var root = firebase.database().ref().child('object')
    //     var dbRef = root.child('items')
    //     dbRef.on(('value', snap => {
    //         console.log(snap.va())
    //     }))
    //     // this.setState({})
    // }
    render() {
        return (
            <div id="user-home">
                <nav className="nav">
                    <div className="nav-wrapper container ">
                        <a href="#" className="brand-logo">Blood Bank App</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="collapsible.html">Log out</a></li>
                        </ul>
                    </div>
                </nav>
                <div id="doner-div">
                    <h3>Doner List</h3>
                    <form onSubmit={this.handleSubmit}>
                        <button>Add Doner Name</button>
                        <input onChange={this.handleChange} value={this.state.text} placeholder="Please Enter your name" />
                    </form>
                    <TodoList items={this.state.items} id="ul" />
                </div>
            </div>
        );
    }
    componentDidMount() {
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();



        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        if (this.state.text === '') {
            alert("Please Enter Youre name first")
        } else {
            this.setState((prevState) => ({
                
                items: firebase.database().ref('items',+ newItem.id).set(newItem),
                text: ''
            }));
        }
    }
}
class TodoList extends React.Component {
    render() {
        return (
            <div >

                <Link to="/">Go to Home page</Link>
                <ol id="ul">
                    {this.props.items.map(item => (
                        <li key={item.id} id={this.props.id}>{item.text}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Doner