import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FormPage from './components/forms/FormPage'
import UserProfile from './components/UserProfile/Profile'
import Follow from './components/Follow';

import { BrowserRouter as Router } from 'react-router-dom'



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
    <div>
      <Router >
        <Navbar toggle={toggle} />
        <UserProfile />
        <h1>Hi</h1>
        <p>mvhccfhv  hcthcj</p>
        <p>mvhccfhv  hcthcj</p>
        <FormPage />
        <Follow />
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
