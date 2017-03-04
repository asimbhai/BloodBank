import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.css'
import Doner from './user'
import firebase from 'firebase'
import { browserHistory } from 'react-router'
class Sign extends Component {
    sign() {
        firebase.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.pass.value).then(() => {
            console.log(this.refs.email.value)
            console.log(this.refs.pass.value)
            browserHistory.push("/doner")
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage)
        })
    }
    signup() {
        // var name = this.refs.pass.value
        // var email = this.refs.email.value
        firebase.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.pass.value).then(() => {
            console.log(this.refs.email.value)
            console.log(this.refs.pass.value)

        })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage)
            }
            )
            // const db = firebase.database();
            // const dbRef = db.ref('object')
            // dbRef.set({
            //     name : "karachi"
            // })
        // firebase.database().ref('users/').set({
        //     username: name,
        //     email: email,
        // });

    }
    render() {
        return (

            <div>
                <nav className="nav">
                    <div className="nav-wrapper container ">
                        <a href="#" className="brand-logo">Blood Bank App</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            
                        </ul>
                    </div>
                </nav>
                <div id="sign">
                    <div id="sForm">
                        <div id="input">
                            Type your Email
                        <hr />
                            <input type="text" id="email" ref="email" /> <br />
                            Password
                        <hr />
                            <input type="password" id="pass" ref="pass" /><br />
                        </div>

                        <button type="button" onClick={this.sign.bind(this)}>Sign in</button>
                        <button type="button" onClick={this.signup.bind(this)}>Sign up</button>
                    </div>
                    
                    <Link to="/">Go to Home page</Link>
                </div>
            </div>
        )
    }
}

export default Sign