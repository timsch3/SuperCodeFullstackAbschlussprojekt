import './details.scss'
import Nav from '../../components/nav/nav'
import TopButtons from '../../components/topButtons/topButtons'
import { Link } from 'react-router-dom'


let sectionStyle = {
    width: "100vw",
    height: "60vh",
    backgroundImage: "url(/images/yoga.png)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const YogaDetail = () => {
    return (
        <div>

            <TopButtons />
            <section id="yoga-details-top-section" style={sectionStyle}>
                <Link to='//www.youtube.com/watch?v=MzGeueRmVuA&ab_channel=MadyMorrison' target={'_blank'}>
                    <img src="images/icons/play-circle.svg" alt="" />
                </Link>
            </section>

            <section className="yogaDetail__main">
                <h1>Healthy Back</h1>
                <p>BEGINNER</p><br />
                <p> Ease the mind into a restful night’s sleep  with
                    these deep, ambient tones.</p><br /><br />
                <section className="yogaDetail__flex_space">
                    <div className="detail__flex">
                        <img className="yogaDetail__icon" src="/images/icons/favorites.svg" alt=""></img>
                        <p>6.478 Favorits</p>
                    </div>
                    <div className="detail__flex">
                        <img className="yogaDetail__icon" src="/images/icons/listening.svg" alt=""></img>
                        <p>23.703 Listening</p>
                    </div>
                </section>
            </section>

            <Nav />

        </div>
    );
}

export default YogaDetail;