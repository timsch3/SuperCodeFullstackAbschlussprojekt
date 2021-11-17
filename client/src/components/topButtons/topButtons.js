import './topButtons.scss'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const TopButtons = (props) => {

    let navigate = useNavigate();

    return (<div id='topButtonsContainer'>
        <div id="topButtonsLeft">
            <div className={'topButtonsButton'} onClick={() => navigate(-1)}>
                <img src="/images/icons/arrow-back.svg" alt="Go back"></img>
            </div>
        </div>
        <div id="topButtonsRight">
            <Link to="">
                <img src="/images/icons/favorite.svg" alt="Add to favorites"></img>
            </Link>
            <Link to="">
                <img src="/images/icons/download.svg" alt="Download"></img>
            </Link>
        </div>
    </div>);
}

export default TopButtons;