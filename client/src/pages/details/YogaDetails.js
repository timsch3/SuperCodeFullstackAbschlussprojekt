import './details.scss'
import Nav from '../../components/nav/nav'
import { Link } from 'react-router-dom'


let sectionStyle = {
    width: "100vw",
    height: "60vh",
    backgroundImage: "url(/images/yoga.png)",
    backgroundSize: "cover",
    display: "flex"

};

const YogaDetail = () => {
    return (
        <div>

            <section style={sectionStyle} >
                <div className="yogaDetail__icon">
                    <Link to="/user" > <img src="/images/icons/arrow-back.svg" alt=""></img></Link>
                </div>
                <div className="yogaDetail__icon2 detail__flex">
                    <Link to="/user"> <img src="/images/icons/list/heart.svg" alt=""></img></Link>
                    <Link to="/user"> <img src="/images/icons/download.svg" alt=""></img> </Link>
                </div>
            </section>

            <section className="yogaDetail__main">
                <h1>Healthy Back</h1>
                <p>BEGINNER</p>
                <p> Ease the mind into a restful night’s sleep  with
                    these deep, ambient tones.</p>
            </section>
            <section className="yogaDetail__flex_space">
                <div className="detail__flex">
                    <img className="yogaDetail__icon" src="/images/icons/favorites.svg" alt=""></img>
                    <p>[XXX]Favorits</p>
                </div>
                <div className="detail__flex">
                    <img className="yogaDetail__icon" src="/images/icons/listening.svg" alt=""></img>
                    <p>[XXX]Listening</p>
                </div>
            </section>

            <Nav />

        </div>
    );
}

export default YogaDetail;