import './nav.scss'

import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <div>

            <nav>

                <ul>

                    <li>

                        <Link to="/yoga"> <img className="nav__icon" src="/images/icons/nav/yoga.svg" alt=""></img>
                            <p> yoga</p></Link>
                    </li>
                    <li>

                        <Link to="/meditation" > <img className="nav__icon" src="/images/icons/nav/meditate.svg" alt=""></img>
                            <p>meditation</p></Link>
                    </li>
                    <li>

                        <Link to="/"> <img className="nav__icon" src="/images/icons/nav/home.svg" alt=""></img>
                            <p>Home</p></Link>
                    </li>
                    <li>

                        <Link to="/music">  <img className="nav__icon" src="/images/icons/nav/music.svg" alt=""></img>
                            <p>music</p></Link>
                    </li>
                    <li>

                        <Link to="/user"><img className="nav__icon" src="/images/icons/nav/user.svg" alt=""></img>
                            <p>user</p></Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Nav;