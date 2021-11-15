import './topButtons.scss'
import { Link } from 'react-router-dom'

const TopButtons = () => {
    return (<div id='topButtonsContainer'>
        <div id="topButtonsLeft">
            <Link to="/home" >
                <img src="/images/icons/arrow-back.svg" alt="Go back to home"></img>
            </Link>
        </div>
        <div id="topButtonsRight">
            <Link to="/home">
                <img src="/images/icons/favorite.svg" alt="Add to favorites"></img>
            </Link>
            <Link to="/home">
                <img src="/images/icons/download.svg" alt="Download"></img>
            </Link>
        </div>
    </div>);
}

export default TopButtons;