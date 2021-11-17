import './music.scss';
import Titel from '../../components/titel/titel';
import Nav from '../../components/nav/nav';


const Music = () => {

    return (
        <>
            <section id="music">
                <div className="musicHeader">
                    <Titel />

                    <h2 className="mainHeader">Good Vibes</h2>
                    <h4 className="playListHeader">PLAYLIST</h4>
                    <h3 className="breatheHeader">Breathe. Sense. Feel. Transcend.</h3>
                    <div className="iconsWrapper">
                        <figure className="iconHeart">
                            <img src="/images/icons/favorites.svg" alt="heart" />
                            <figcaption>
                                24.234 Favorits
                            </figcaption>
                        </figure>
                        <figure className="iconPhones">
                            <img src="/images/icons/listening.svg" alt="listening" />
                            <figcaption>
                                34.234 Listening
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <article className="playList">
                    <div className="playListItems">
                        <figure className="playicon">
                            <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                        </figure>
                        <div className="musicContent">
                            <p>Blunda</p>
                            <p>3:33</p>
                        </div>
                    </div>

                    <div className="playListItems">
                        <figure className="playicon">
                            <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                        </figure>
                        <div className="musicContent">
                            <p>Big Sky</p>
                            <p>4:04</p>
                        </div>
                    </div>

                    <div className="playListItems">
                        <figure className="playicon">
                            <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                        </figure>
                        <div className="musicContent">
                            <p>Endless Nights</p>
                            <p>2:59</p>
                        </div>
                    </div>

                    <div className="playListItems">
                        <figure className="playicon">
                            <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                        </figure>
                        <div className="musicContent">
                            <p>Te Urewera</p>
                            <p>3:05</p>
                        </div>
                    </div>

                    <div className="playListItems">
                        <figure className="playicon">
                            <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                        </figure>
                        <div className="musicContent">
                            <p>Halvmane</p>
                            <p>2:38</p>
                        </div>
                    </div>
                </article>
            </section>
            <Nav />
        </>
    );
}

export default Music;