import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Router, Route, Link, browserHistory } from 'react-router'
import Sign from './components/signIn'
var root = document.getElementById('root')
import Doner from './components/user'
import * as firebase from 'firebase';
// var database = firebase.database();


// var firebase = require('firebase')

var config = {
  apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
  authDomain: "react-todo-31aff.firebaseapp.com",
  databaseURL: "https://react-todo-31aff.firebaseio.com",
  storageBucket: "react-todo-31aff.appspot.com",
  messagingSenderId: "431679818811"
};
firebase.initializeApp(config);

// var date = firebase.database().ref('root')
// date.set({
//   firstName: 'Bilal',
//   lastName: "Ahmad"
// })
// var date = firebase.database().ref('root')
// date.set({
//     name: this.state.items
// })

class Home extends Component {
  render() {
    return (
      <div>


        <nav className="nav">

          <div className="nav-wrapper container ">
            <a href="#" className="brand-logo">Blood Bank App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="sign">Sign in</Link></li>
              <li><a href="badges.html">Sign up</a></li>

            </ul>
          </div>
        </nav>
        <h2>Sign in first to display list of doners</h2>
          <hr/>
        <div id="home">
          
        <h1><Link to="sign">Sign in</Link></h1>
        <h1><Link to="sign">Sign up</Link></h1>
        </div>
          
        </div>
      
    )
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/sign" component={Sign} />
    <Route path="/doner" component={Doner} />
  </Router>,
  root
)







// export default Navbar*/
