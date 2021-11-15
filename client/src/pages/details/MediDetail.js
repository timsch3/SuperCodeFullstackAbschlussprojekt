import './details.scss'
import Nav from '../../components/nav/nav'

const MediDetail = () => {
    return (
        <div>

            <section style={{ backgroundImage: `url(/images/home/healthy-back.png)` }}>
                <img className="yogaDetail__icon" src="/images/icons/arrow-back.svg" alt=""></img>
                <img className="yogaDetail__icon" src="/images/icons/heart.svg" alt=""></img>
                <img className="yogaDetail__icon" src="/images/icons/download.svg" alt=""></img>
            </section>
            <h1>Happy Morning</h1>
            <p>COURSE</p>
            <p> Ease the mind into a restful night’s sleep  with
                these deep, ambient tones.</p>
            <img className="yogaDetail__icon" src="/images/icons/favorites.svg" alt=""></img>
            <p>[XXX]Favorits</p>
            <img className="yogaDetail__icon" src="/images/icons/listening.svg" alt=""></img>
            <p>[XXX]Listening</p>

            <h2>Playlist</h2>
            <section>
                <img className="yogaDetail__icon" src="/images/icons/.svg" alt=""></img>
                <div>
                    <p>Focus Attention</p>
                    <p>10min</p>
                </div>
            </section>
            <section>
                <img className="yogaDetail__icon" src="/images/icons/.svg" alt=""></img>
                <div>
                    <p>Focus Attention</p>
                    <p>10min</p>
                </div>
            </section>
            <section>
                <img className="yogaDetail__icon" src="/images/icons/.svg" alt=""></img>
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