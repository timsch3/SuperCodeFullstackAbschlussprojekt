import './nav.scss'

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/yoga">Yoga</Link>
            </li>
            <li>
                <Link to="/meditate">Meditate</Link>
            </li>
            <li>
                <Link to="/music">Music</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
        </ul>
    );
}

export default Nav;