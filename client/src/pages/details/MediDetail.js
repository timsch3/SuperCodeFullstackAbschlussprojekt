import './details.scss'
import Nav from '../../components/nav/nav'
import TopButtons from '../../components/topButtons/topButtons'
import { Link } from 'react-router-dom'

let meditate = {
    width: "100vw",
    height: "40vh",
    backgroundImage: "url(/images/home/meditation.png)",
    backgroundSize: "cover",
    // repeat: "no-repeat"

};

const MediDetail = () => {
    return (
        <div>
            <TopButtons />
            <section style={meditate}>
                {/* <div className="icon__flex">
                    <div className="yogaDetail__icon">
                        <Link to="/user" > <img src="/images/icons/arrow-back.svg" alt=""></img></Link>
                    </div>
                    <div className="yogaDetail__icon2 detail__flex">
                        <Link to="/user"> <img src="/images/icons/list/heart.svg" alt=""></img></Link>
                        <Link to="/user"> <img src="/images/icons/download.svg" alt=""></img> </Link>
                    </div>
                </div> */}
            </section>

            <section className="yogaDetail__main">
                <h1>Happy Morning</h1>
                <p>COURSE</p>
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

            <h2 className="yogaDetail__main">Playlist</h2>
            <section className="icon__flex">
                <img className="yogaDetail__icon" src="/images/icons/play.png" alt=""></img>
                <div>
                    <p>Focus Attention</p>
                    <p>10min</p>
                </div>
            </section>
            <section className="icon__flex">
                <img className="yogaDetail__icon" src="/images/icons/play.png" alt=""></img>
                <div>
                    <p>Focus Attention</p>
                    <p>10min</p>
                </div>
            </section>
            <section className="icon__flex">
                <img className="yogaDetail__icon" src="/images/icons/play.png" alt=""></img>
                <div>
                    <p>Focus Attention</p>
                    <p>10min</p>
                </div>
            </section>
            <Nav />




        </div>
    );
}

export default MediDetail;