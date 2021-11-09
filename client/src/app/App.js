import '../style/style.scss'
import Login from '../components/login/login'
import Home from '../components/home/home'
import Yoga from '../components/yoga/yoga'
import Meditate from '../components/meditate/meditate'
import Music from '../components/music/music'
import User from '../components/user/user'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/meditate" element={<Meditate />} />
          <Route path="/music" element={<Music />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
