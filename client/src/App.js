import { useState, useEffect } from 'react';
import './App.css';

function App() {
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
      {console.log(user)}
      <h1>Hi</h1>
      {user.map(user => {
        return (
          <div>
            <h1>{user.userName}</h1>

          </div>
        )
      })}
    </div>
  );
}

export default App;
