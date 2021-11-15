import './category.scss'

import { Link } from 'react-router-dom';



const Category = () => {
    return (
        <ul className="cat-list">
            <li>
                <Link to="/yoga">
                    <img className="cat-icon" src="/images/icons/list/all.svg" alt=""></img>
                    <p>All</p>
                </Link>
            </li>
            <li>
                <Link to="/yoga" >
                    <img className="cat-icon" src="/images/icons/list/heart.svg" alt=""></img>
                    <p>Favorites</p>
                </Link>
            </li>
            <li>
                <Link to="/yoga">
                    <img className="cat-icon" src="/images/icons/list/sad.svg" alt=""></img>
                    <p>Anxious</p>
                </Link>
            </li>
            <li>
                <Link to="/yoga">
                    <img className="cat-icon" src="/images/icons/list/sleep.svg" alt=""></img>
                    <p>Sleep</p>
                </Link>
            </li>
            <li>
                <Link to="/yoga">
                    <img className="cat-icon" src="/images/icons/list/kid.svg" alt=""></img>
                    <p>Kids</p>
                </Link>
            </li>
        </ul>
    )
}
export default Category;