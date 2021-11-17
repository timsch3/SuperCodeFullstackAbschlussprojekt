import './details.scss'
import Nav from '../../components/nav/nav'
import TopButtons from '../../components/topButtons/topButtons'
import { Link } from 'react-router-dom'

let sectionStyle = {
    width: "100vw",
    height: "60vh",
    backgroundImage: "url(/images/meditation-full.jpg)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const MediDetail = () => {
    return (
        <div>
            <TopButtons />
            <section id="yoga-details-top-section" style={sectionStyle}>
                <Link to='//www.youtube.com/watch?v=ockCQMt9kM0' target={'_blank'}>
                    <img src="images/icons/play-circle.svg" alt="" />
                </Link>
            </section>

            <section className="yogaDetail__main">
                <h1>Happy Morning</h1>
                <p>COURSE</p><br />
                <p> Ease the mind into a restful night’s sleep  with
                    these deep, ambient tones.</p><br /><br />
            </section>
            <section className="yogaDetail__flex_space">
                <div className="detail__flex">
                    <img className="yogaDetail__icon" src="/images/icons/favorites.svg" alt=""></img>
                    <p>1.573 Favorits</p>
                </div>
                <div className="detail__flex">
                    <img className="yogaDetail__icon" src="/images/icons/listening.svg" alt=""></img>
                    <p>23.432 Listening</p>
                </div><br /><br /><br />
            </section>
            <Nav />
        </div>
    );
}

export default MediDetail;