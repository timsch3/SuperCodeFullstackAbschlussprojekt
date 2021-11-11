import './home.scss'
import Titel from '../../components/titel/titel'
import Nav from '../../components/nav/nav'
import { Link } from 'react-router-dom';
import Search from '../../components/search/search';
import { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState(null)
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        fetch('http://localhost:3000/home')
            .then(res => res.json())
            .then(response => {
                setData(response)
                setIsReady(true)
            })
    }, [])
    if (isReady) {
        return (
            <>
                <Titel />
                <main id={'home-main'}>
                    <h2>Good morning [username]</h2>
                    <p id={'we-hope'}>We hope you have a good day</p>
                    <div id={'home-lessons'}>
                        <div className={'home-lesson home-lessonL'} style={{ backgroundImage: `url(/images/home/healthy-back.png)` }}>
                            <div className="home-lesson-middle">
                                <h3>Healthy<br />Back</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className="home-lesson-bottom">
                                <span>3-10 MIN</span>
                                <Link to='/'>START</Link>
                            </div>
                        </div>
                        <div className={'home-lesson home-lessonR'} style={{ backgroundImage: `url(/images/home/meditation.png)` }}>
                            <div className="home-lesson-middle">
                                <h3>Meditation</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className="home-lesson-bottom">
                                <span>3-10 MIN</span>
                                <Link to='/'>START</Link>
                            </div>
                        </div>
                    </div>
                    <Search />
                    <div id={'home-recommended-yoga'}>
                        <h2>Recommended yoga for you</h2>
                        <div id={'home-recommended-yoga-cards'}>
                            {data.yoga.map((elt) => {
                                return (
                                    <div className={'home-recommended-yoga-card'}>
                                        <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                                        <h3>{elt.track.name}</h3>
                                        <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div id={'home-recommended-meditation'}>
                        <h2>Recommended meditation for you</h2>
                        <div id={'home-recommended-meditation-cards'}>
                            {data.meditation.map((elt) => {
                                return (
                                    <div className={'home-recommended-yoga-card'}>
                                        <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                                        <h3>{elt.track.name}</h3>
                                        <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </main>
                <Nav />
            </>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default Home;