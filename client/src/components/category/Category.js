import './category.scss'

import { Link } from 'react-router-dom';



const Category = () => {
    return (
        <div>
            <ul>

                <li>

                    <Link to="/yoga"> <img className="list__icon" src="/images/icons/list/sleep.svg" alt=""></img>
                        <p> All</p></Link>
                </li>
                <li>

                    <Link to="/meditation" > <img className="list__icon" src="/images/icons/list/kids.svg" alt=""></img>
                        <p>Favorites</p></Link>
                </li>
                <li>

                    <Link to="/"> <img className="list__icon" src="/images/icons/list/home.svg" alt=""></img>
                        <p>Anxious</p></Link>
                </li>
                <li>

                    <Link to="/music">  <img className="list__icon" src="/images/icons/list/music.svg" alt=""></img>
                        <p>Sleep</p></Link>
                </li>
                <li>

                    <Link to="/user"><img className="list__icon" src="/images/icons/list/user.svg" alt=""></img>
                        <p>Kids</p></Link>
                </li>

            </ul>
        </div>
    )
}
export default Category;