import '../style/style.scss';
import Login from '../pages/login/login';
import Sign from '../pages/sign/sign';
import Welcome from '../pages/welcome/welcome';
import Home from '../pages/home/home';
import Yoga from '../pages/yoga/yoga';
import Meditate from '../pages/meditate/meditate';
import YogaDetail from '../pages/details/YogaDetails';
import MediDetail from '../pages/details/MediDetail';
import Music from '../pages/music/music';
import User from '../pages/user/user';
import Player from '../pages/player/player';

import { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const serverAPI = 'http://localhost:3000/';

function App() {

  const [user, setUser] = useState({});
  const [error, setError] = useState(null); // eslint-disable-line
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`${serverAPI}auth/login/success`, {
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
        setAuthenticated(true);
        setUser(responseJson.user);
      })
      .catch(error => {
        setAuthenticated(false);
        setError("Failed to authenticate user");
      });
  }, []);

  return (
    <>
      {authenticated ?
        <BrowserRouter>
          <Routes>
            <Route path="/"
              element={<Welcome
                username={user.username}
              />} />
            <Route path="/welcome"
              element={<Welcome
                username={user.username}
              />} />
            <Route path="/home"
              element={<Home
                username={user.username}
                serverAPI={serverAPI}
              />} />
            <Route path="/yoga"
              element={<Yoga
                serverAPI={serverAPI}
              />} />
            <Route path="/yoga-details" element={<YogaDetail />} />
            <Route path="/meditate"
              element={<Meditate
                serverAPI={serverAPI}
              />} />
            <Route path="/meditate-details"
              element={<MediDetail />} />
            <Route path="/music" element={<Music />} />
            <Route path="/user" element={<User username={user.username} userphoto={user.photo} serverAPI={serverAPI} />} />
            <Route path="/player/:contentType/:id" element={<Player serverAPI={serverAPI} />} />
          </Routes>
        </BrowserRouter>
        :
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

          </Routes>
        </BrowserRouter>}
    </>
  );
}

export default App;
