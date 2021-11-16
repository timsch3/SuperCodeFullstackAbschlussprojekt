import './details.scss'
import Nav from '../../components/nav/nav'
import TopButtons from '../../components/topButtons/topButtons'


let sectionStyle = {
    width: "100vw",
    height: "60vh",
    backgroundImage: "url(/images/yoga.png)",
    backgroundSize: "cover",

};

const YogaDetail = () => {
    return (
        <div>

            <TopButtons />
            <section style={sectionStyle} />

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