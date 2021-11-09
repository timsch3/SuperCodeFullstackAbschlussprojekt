import './nav.scss'

const Nav = () => {
    return (
        <div>
            <nav className="">

                <ul>
                    <li>
                        <Link to="/yoga">yoga</Link>
                    </li>
                    <li>
                        <Link to="/meditation">meditation</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/music">music</Link>
                    </li>
                    <li>
                        <Link to="/user">user</Link>
                    </li>

                </ul>


            </nav>
        </div>
    );
}

export default Nav;