import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router } from 'react-router-dom'
import Tweet from './components/Tweet';
import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import TrendsHashtag from './components/TrendsHashtag';
import WhoToFollow from './components/WhoToFollow';



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
        <h1>Hi</h1>

        <p>mvhccfhv  hcthcj</p>
        <p>mvhccfhv  hcthcj</p>
        <Tweet/>
        <TrendsHashtag/>
        <WhoToFollow/>

        <Footer />
      </Router>
      {console.log(user)}

      {/* {user.map(user => {
        return (
          <div>
            <h1>{user.userName}</h1>

          </div>
        )
      })} */}
    </div>
  );
}

export default App;
