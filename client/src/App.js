import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginForm from './components/Login/Login'
import SginUpForm from './components/Login/Signup'

import 'semantic-ui-css/semantic.min.css'
import Explore from './components/explore';
// import 'bootstrap/dist/css/bootstrap.min.css';

import TrendsHashtag from './components/TrendsHashtag';
import Hashtag from './components/Hashtag';



function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <div className="App">
      <Router >
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/home" exact component={TrendsHashtag} />
          <Route path="/hashtag" exact component={Hashtag} />
          <Route path="/bookmarks" exact component={SginUpForm} />
          <Route path="/explore" exact component={Explore} />

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App