import './user.scss'
import Titel from '../../components/titel/titel'
import Nav from '../../components/nav/nav'
import { Link } from 'react-router-dom';
import Search from '../../components/search/search';
import { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState(null)
    const [isReady, setIsReady] = useState()
    useEffect(() => {
        fetch('http://localhost:3000/api/user') // fetch when backend google auth is ready
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
                <main id={'user-main'}>
                    <div id={'user-profile'}>
                        [user image and name]
                    </div>
                    <Search />
                    <div id={'user-favs-yoga'}>
                        <h2>Your yoga favorites</h2>
                        <div id={'user-favs-yoga-cards'}>
                            {/* {data.yoga.map((elt) => {
                            return (
                                <div className={'user-favs-yoga-card'}>
                                    <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                                    <h3>{elt.track.name}</h3>
                                    <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                                </div>
                            )
                        })} */}
                        </div>
                    </div>
                    <div id={'user-favs-meditation'}>
                        <h2>Your meditation favorites</h2>
                        <div id={'user-favs-meditation-cards'}>
                            {/* {data.meditation.map((elt) => {
                            return (
                                <div className={'user-favs-yoga-card'}>
                                    <img src={elt.track.album.images[0].url} alt={elt.track.name} />
                                    <h3>{elt.track.name}</h3>
                                    <p>{(elt.track.duration_ms * 0.000016666666666667).toFixed(0)} MIN</p>
                                </div>
                            )
                        })} */}
                        </div>
                    </div>
                </main>
                <Nav />
            </>
        )
    }
    else {
        return (
            <>
                <Titel />
                <main id={'user-main'}>
                    <div id={'user-profile'}>
                        [user image and name]
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