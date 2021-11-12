import '../style/style.scss'
import Login from '../pages/login/login'
import Welcome from '../pages/welcome/welcome'
import Home from '../pages/home/home'
import Yoga from '../pages/yoga/yoga'
import YogaDetail from '../pages/details/YogaDetails'
import Meditate from '../pages/meditate/meditate'
import MediDetail from '../pages/details/MediDetail'
import Music from '../pages/music/music'
import User from '../pages/user/user'

import data from '../data/data'
import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [loginData, setLoginData] = useState(data)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome loginData={loginData} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/yoga-details" element={<YogaDetail />} />
        <Route path="/meditate" element={<Meditate />} />
        <Route path="/meditate-details" element={<MediDetail />} />
        <Route path="/music" element={<Music />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
