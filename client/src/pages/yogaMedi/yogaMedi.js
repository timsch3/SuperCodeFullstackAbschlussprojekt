import './yogaMedi.scss'

import { useState, useEffect } from 'react'

import Titel from '../../components/titel/titel'
import Category from '../../components/category/Category'
import Search from '../../components/search/search'
import Nav from '../../components/nav/nav'

import ContentSearch from '../../components/contentSearch/contentSearch'

const YogaMedi = (props) => {

    const { titel, description } = props;

    const [data, setData] = useState([])
    const [newData, setNewData] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (titel == 'Yoga') {
            fetch('http://localhost:3000/home')
                .then(res => res.json())
                .then(response => {
                    setData(response.yoga)
                    setIsReady(true)
                })
            setSearchData('')
        } else {
            fetch('http://localhost:3000/home')
                .then(res => res.json())
                .then(response => {
                    setData(response.meditation)
                    setIsReady(true)
                })
            setSearchData('')
        }
    }, [titel]);

    const getSearchData = (e) => {
        setSearchData(e)
    }

    useEffect(() => {
        const results = data.filter(elt =>
            elt.track.name.toLowerCase().includes(searchData)
        );
        setNewData(results)
    }, [searchData])


    return (
        <>
            <Titel />
            <main className="content-yom">
                <h1>{titel}</h1>
                <p>{description}</p>
                <div className="cat-yom">
                    <Category />
                </div>
                <div className="search-yom">
                    <Search getSearchData={getSearchData} />
                </div>
                <div className="track-yom-background">
                    <div className="track-yom">
                        <div className="track-yom-info">
                            <h2>Daily Calm</h2>
                            <div className="track-yom-info-line">
                                <p>APR 30</p>
                                <div className="dot-yom"></div>
                                <p>PAUSE PRACTICE</p>
                            </div>
                        </div>
                        <div className="track-yom-play">
                            <img src="/images/icons/list/play.svg"></img>
                        </div>
                    </div>
                </div>
                {isReady
                    ?
                    <div className="search-content">
                        <ContentSearch data={searchData != 0 ? newData : data} />
                    </div>
                    :
                    <div>Loading...</div>
                }
            </main>
            <Nav />
        </>
    );
}

export default YogaMedi;