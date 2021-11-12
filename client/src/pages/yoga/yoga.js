import './yoga.scss'
import Titel from '../../components/titel/titel'

import { Link } from 'react-router-dom'
import Nav from '../../components/nav/nav'

const Yoga = () => {
    return (
        <>
            <Titel />
            <div className="content-yom">
                <h1>Yoga</h1>
                <p>Find your inner zen from annywhere.</p>
                <div className="category">
                    <ul>
                        <li>

                            <Link to="/yoga"> <img className="nav__icon" src="/images/icons/nav/yoga.svg" alt=""></img>
                                <p> yoga</p></Link>
                        </li>
                        <li>

                            <Link to="/yoga" > <img className="nav__icon" src="/images/icons/nav/meditate.svg" alt=""></img>
                                <p>meditation</p></Link>
                        </li>
                        <li>

                            <Link to="/yoga"> <img className="nav__icon" src="/images/icons/nav/home.svg" alt=""></img>
                                <p>Home</p></Link>
                        </li>
                        <li>

                            <Link to="/yoga">  <img className="nav__icon" src="/images/icons/nav/music.svg" alt=""></img>
                                <p>music</p></Link>
                        </li>
                        <li>

                            <Link to="/yoga"><img className="nav__icon" src="/images/icons/nav/user.svg" alt=""></img>
                                <p>user</p></Link>
                        </li>

                    </ul>
                </div>
            </div>
            <Nav />
        </>
    );
}

export default Yoga;