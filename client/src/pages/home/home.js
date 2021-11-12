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
                </main>
                <Nav />
            </>
        )
    }
    else {
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
                    <br />
                    <p>Loading data...</p>
                </main>
                <Nav />
            </>
        )
    }
}

export default Home;