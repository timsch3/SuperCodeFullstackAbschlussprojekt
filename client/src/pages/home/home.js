import './home.scss';
import Titel from '../../components/titel/titel';
import Nav from '../../components/nav/nav';
import { Link } from 'react-router-dom';
import Search from '../../components/search/search';
import { useState, useEffect } from 'react';
import ContentSection from '../../components/contentSection/contentSection';

const Home = (props) => {

    const { serverAPI } = props;

    const [dataY, setDataY] = useState([]);
    const [dataM, setDataM] = useState([]);
    const [searchedDataY, setSearchedDataY] = useState([]);
    const [searchedDataM, setSearchedDataM] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [searchValue, setSearchValue] = useState(null);

    useEffect(() => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setDataY(response.yoga)
                setIsReady(true)
            })
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setDataM(response.meditation)
                setIsReady(true)
            })
    }, [])

    const getSearchValue = (e) => {
        setSearchValue(e)
    }

    useEffect(() => {
        const resultsY = dataY.filter(elt => elt.track.name.toLowerCase().includes(searchValue));
        setSearchedDataY(resultsY)
    }, [searchValue])

    useEffect(() => {
        const resultsM = dataM.filter(elt => elt.track.name.toLowerCase().includes(searchValue));
        setSearchedDataM(resultsM)
    }, [searchValue])

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
                                <Link to='/yoga-details'>START</Link>
                            </div>
                        </div>
                        <div className={'home-lesson home-lessonR'} style={{ backgroundImage: `url(/images/home/meditation.png)` }}>
                            <div className="home-lesson-middle">
                                <h3>Meditation</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className="home-lesson-bottom">
                                <span>3-10 MIN</span>
                                <Link to='/meditate-details'>START</Link>
                            </div>
                        </div>
                    </div>
                    <Search getSearchValue={getSearchValue} />
                    <div className="spacer" />
                    <ContentSection title='Recommended yoga for you' contentData={searchValue != null ? searchedDataY : dataY} />
                    <ContentSection title='Recommended meditation for you' contentData={searchValue != null ? searchedDataM : dataM} />
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
                                <Link to='/yoga-details'>START</Link>
                            </div>
                        </div>
                        <div className={'home-lesson home-lessonR'} style={{ backgroundImage: `url(/images/home/meditation.png)` }}>
                            <div className="home-lesson-middle">
                                <h3>Meditation</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className="home-lesson-bottom">
                                <span>3-10 MIN</span>
                                <Link to='/meditate-details'>START</Link>
                            </div>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    <p>Loading...</p>
                </main>
                <Nav />
            </>
        )
    }
}

export default Home;