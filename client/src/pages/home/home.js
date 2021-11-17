import './home.scss';
import Titel from '../../components/titel/titel';
import Nav from '../../components/nav/nav';
import { Link } from 'react-router-dom';
import Search from '../../components/search/search';
import { useState, useEffect } from 'react';
import ContentSection from '../../components/contentSection/contentSection';

import CircularProgress from '@mui/material/CircularProgress';

const Home = (props) => {

    const { serverAPI, username } = props;

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
                setDataY(response.yoga);
                setIsReady(true);
            })
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setDataM(response.meditation);
                setIsReady(true);
            })
    }, []);  // eslint-disable-line

    const getSearchValue = (e) => {
        setSearchValue(e);
    }

    useEffect(() => {
        const resultsY = dataY.filter(elt => elt.track.name.toLowerCase().includes(searchValue));
        setSearchedDataY(resultsY);
    }, [searchValue]);  // eslint-disable-line

    useEffect(() => {
        const resultsM = dataM.filter(elt => elt.track.name.toLowerCase().includes(searchValue));
        setSearchedDataM(resultsM);
    }, [searchValue]);  // eslint-disable-line

    if (isReady) {
        return (
            <>
                <Titel />
                <main id={'home-main'}>
                    <h2>Good morning {username}</h2>
                    <p id={'we-hope'}>We hope you have a good day</p>
                    <div id={'home-lessons'}>
                        <div className={'home-lesson home-lessonL'} style={{ backgroundImage: 'url(/images/home/healthy-back.png)' }}>
                            <div className={"home-lesson-middle"}>
                                <h3>Healthy<br />Back</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className={"home-lesson-bottom"}>
                                <span>3-10 MIN</span>
                                <Link to='/yoga-details'>START</Link>
                            </div>
                        </div>
                        <div className={'home-lesson home-lessonR'} style={{ backgroundImage: `url(/images/home/meditation.png)` }}>
                            <div className={"home-lesson-middle"}>
                                <h3>Meditation</h3>
                                <p>BEGINNER</p>
                            </div>
                            <div className={"home-lesson-bottom"}>
                                <span>3-10 MIN</span>
                                <Link to='/meditate-details'>START</Link>
                            </div>
                        </div>
                    </div>
                    <Search getSearchValue={getSearchValue} />
                    <div className={"spacer"} />
                    <ContentSection title='Recommended yoga for you' contentData={searchValue != null ? searchedDataY : dataY} contentType='yoga' />
                    <ContentSection title='Recommended meditation for you' contentData={searchValue != null ? searchedDataM : dataM} contentType='meditation' />
                </main>
                <Nav />
            </>
        )
    }
    else {
        return (
            <>
                <Titel />
                <div className="loading">
                    <CircularProgress />
                </div>
                <Nav />
            </>
        )
    }
}

export default Home;