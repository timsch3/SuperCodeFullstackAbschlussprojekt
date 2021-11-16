import '../style/style.scss'
import Login from '../pages/login/login'
import Sign from '../pages/sign/sign'
import Welcome from '../pages/welcome/welcome'
import Home from '../pages/home/home'
import YogaMedi from '../pages/yogaMedi/yogaMedi'
import YogaDetail from '../pages/details/YogaDetails'
import MediDetail from '../pages/details/MediDetail'
import Music from '../pages/music/music'
import User from '../pages/user/user'
import Player from '../pages/player/player'

import { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const serverAPI = 'http://localhost:3000/'

function App() {

  const [user, setUser] = useState({})
  const [error, setError] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        setAuthenticated(true)
        setUser(responseJson.user)
      })
      .catch(error => {
        setAuthenticated(false)
        setError("Failed to authenticate user")
      });
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in"
          element={<Sign
            titel={'Welcome Back!'}
          />} />
        <Route path="/sign-up"
          element={<Sign
            titel={'Create your account'}
          />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home"
          element={<Home
            serverAPI={serverAPI}
          />} />
        <Route path="/yoga"
          element={<YogaMedi
            serverAPI={serverAPI}
            titel={'Yoga'}
            description={'Find your inner zen from annywhere.'}
          />} />
        <Route path="/yoga-details" element={<YogaDetail />} />
        <Route path="/meditate"
          element={<YogaMedi
            serverAPI={serverAPI}
            titel={'Meditate'}
            description={'Audio-only meditation techniques to help you minimize your screen time and practice on the go.'}
          />} />
        <Route path="/meditate-details"
          element={<MediDetail />} />
        <Route path="/music" element={<Music />} />
        <Route path="/user" element={<User serverAPI={serverAPI} />} />
        <Route path="/player/:contentType/:id" element={<Player serverAPI={serverAPI} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
