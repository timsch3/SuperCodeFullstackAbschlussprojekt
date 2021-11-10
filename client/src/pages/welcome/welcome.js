import './welcome.scss'

import Titel from '../../components/titel/titel'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Titel />
            <div>This is Welcome!</div>
            <Link to="/home">GO TO START</Link>
        </>
    );
}

export default Login;