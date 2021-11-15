import './yogaMedi.scss'

import { useState, useEffect } from 'react'

import Titel from '../../components/titel/titel'
import Category from '../../components/category/Category'
import Search from '../../components/search/search'
import Nav from '../../components/nav/nav'

import ContentSearch from '../../components/contentSearch/contentSearch'

const Yoga = (props) => {

    const { titel, description, data, isReady } = props;

    const [newData, setNewData] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [isReadySearch, setIsReadySearch] = useState(false);

    const getSearchData = (e) => {
        setSearchData(e)
    }

    // useEffect(() => {
    //     setIsReadySearch(true)
    //     const results = data.filter(elt =>
    //         elt.track.name.toLowerCase().includes(searchData)
    //     );
    //     setNewData(results)
    // }, [searchData])

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
                        <ContentSearch data={isReadySearch && searchData != 0 ? newData : data} />
                    </div>
                    :
                    <div>Loading...</div>
                }
            </main>
            <Nav />
        </>
    );
}

export default Yoga;