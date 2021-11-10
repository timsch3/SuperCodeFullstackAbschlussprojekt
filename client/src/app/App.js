import '../style/style.scss'
import Welcome from '../pages/welcome/welcome'
import Home from '../pages/home/home'
import Yoga from '../pages/yoga/yoga'
import Meditate from '../pages/meditate/meditate'
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
        <Route path="/" element={<Welcome loginData={loginData} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/meditate" element={<Meditate />} />
        <Route path="/music" element={<Music />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
