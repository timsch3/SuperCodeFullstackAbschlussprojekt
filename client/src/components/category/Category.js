import './category.scss'

import { Link } from 'react-router-dom';

const Category = (props) => {

    const { getAllCat, getFavoritesCat, getSadCat, getSleepCat, getKidsCat } = props;

    return (
        <ul className="cat-list">
            <li>
                <div onClick={() => getAllCat()}>
                    <img className="cat-icon" src="/images/icons/list/all.svg" alt=""></img>
                    <p>All</p>
                </div>
            </li>
            <li>
                <div onClick={() => getFavoritesCat()}>
                    <img className="cat-icon" src="/images/icons/list/heart.svg" alt=""></img>
                    <p>Favorites</p>
                </div>
            </li>
            <li>
                <div onClick={() => getSadCat()}>
                    <img className="cat-icon" src="/images/icons/list/sad.svg" alt=""></img>
                    <p>Anxious</p>
                </div>
            </li>
            <li>
                <div onClick={() => getSleepCat()}>
                    <img className="cat-icon" src="/images/icons/list/sleep.svg" alt=""></img>
                    <p>Sleep</p>
                </div>
            </li>
            <li>
                <div onClick={() => getKidsCat()}>
                    <img className="cat-icon" src="/images/icons/list/kid.svg" alt=""></img>
                    <p>Kids</p>
                </div>
            </li>
        </ul >
    )
}
export default Category;