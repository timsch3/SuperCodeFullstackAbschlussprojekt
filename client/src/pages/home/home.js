import './home.scss'
import Titel from '../../components/titel/titel'
import Nav from '../../components/nav/nav'
import { Link } from 'react-router-dom';
// import Search from '../../components/search/search';
import { useState, useEffect } from 'react'
import ContentSection from '../../components/contentSection/contentSection'

const Home = () => {
    const [data, setData] = useState(null)
    const [isReady, setIsReady] = useState(false)
    // const [newData, setNewData] = useState([])
    // const [searchData, setSearchData] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(response => {
                setData(response)
                setIsReady(true)
            })
        // setSearchData('')
    }, [])

    // const getSearchData = (e) => {
    //     setSearchData(e)
    // }

    // useEffect(() => {
    //     const results = data.yoga.filter(elt =>
    //         elt.track.name.toLowerCase().includes(searchData)
    //     );
    //     setNewData(results)
    // }, [searchData])

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
                    {/* <Search data={searchData !== 0 ? newData : data} /> */}
                    <div className="spacer" />
                    <ContentSection title='Recommended yoga for you' contentData={data.yoga}></ContentSection>
                    <ContentSection title='Recommended meditation for you' contentData={data.meditation} />
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