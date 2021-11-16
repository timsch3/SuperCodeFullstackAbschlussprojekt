import './music.scss';
import { useState, useEffect } from 'react'
import Titel from '../../components/titel/titel';


const Music = () => {

    
    return (
        <section>
        <div className="musicHeader">
           <Titel />

           <h2>Good Vibes</h2>
           <h4>PLAYLIST</h4>
           <h3>Breathe. Sense. Feel. Transcend.</h3>
           <div className="iconsWrapper">
           <figure className="iconHeart">
           <img  src="/images/icons/favorites.svg" alt="heart" />
           <figcaption>
           24.234 Favorits
           </figcaption>
           </figure>
           <figure className="iconPhones">
           <img  src="/images/icons/listening.svg" alt="listening" />
           <figcaption>
           34.234 Listening
           </figcaption>
           </figure>
           </div>
        </div>
        <article>
            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>

            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>

            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>

            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>

            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>

            <div className="playList">
                <figure className="playicon">
                    <img src="/images/icons/playIconGrey.png" alt="playIconGrey" />
                </figure>
                <p>Blunda</p>
                <p>3:33</p>
            </div>
            

        </article>
        </section>
    );
}

export default Music;