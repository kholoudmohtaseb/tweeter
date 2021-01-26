import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './components/Login/Login'
import SginUpForm from './components/Login/Signup'

import 'semantic-ui-css/semantic.min.css'
import Explore from './components/explore';



function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
  }
  const [user, setuser] = useState([
    {
      userName: '',

    }
  ])


  useEffect(() => {
    fetch('/test').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setuser(jsonRes))
  })

  return (
    <div className="App">
      <Router >
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/home" exact component={LoginForm} />
          <Route path="/bookmarks" exact component={SginUpForm} />
          <Route path="/explore" exact component={Explore} />


        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
