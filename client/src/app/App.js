import '../style/style.scss'
import Login from '../pages/login/login'
import Welcome from '../pages/welcome/welcome'
import Home from '../pages/home/home'
import YogaMedi from '../pages/yogaMedi/yogaMedi'
import YogaDetail from '../pages/details/YogaDetails'
import MediDetail from '../pages/details/MediDetail'
import Music from '../pages/music/music'
import User from '../pages/user/user'

import dataLogin from '../data/data'
import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const serverAPI = 'http://localhost:3000/'

function App() {

  const [loginData, setLoginData] = useState(dataLogin)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome loginData={loginData} />} />
        <Route path="/home" element={<Home />} />
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
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
