import './yogaMedi.scss'

import { useState, useEffect } from 'react'

import Titel from '../../components/titel/titel'
import Category from '../../components/category/Category'
import Search from '../../components/search/search'
import Nav from '../../components/nav/nav'

import ContentSearch from '../../components/contentSearch/contentSearch'

const YogaMedi = (props) => {

    const { serverAPI, titel, description } = props;

    const [data, setData] = useState([])
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        if (titel === 'Yoga') {
            fetch(serverAPI)
                .then(res => res.json())
                .then(response => {
                    setData(response.yoga)
                    setIsReady(true)
                    console.log(response)
                })
            setSearchValue('')
        } else {
            fetch(serverAPI)
                .then(res => res.json())
                .then(response => {
                    setData(response.meditation)
                    setIsReady(true)
                })
            setSearchValue('')
        }
    }, [titel]);

    const getSearchValue = (e) => {
        setSearchValue(e)
    }

    useEffect(() => {
        const results = data.filter(elt =>
            elt.track.name.toLowerCase().includes(searchValue)
        );
        setSearchedData(results)
    }, [searchValue])

    //category
    const getAllCat = () => {
        window.location.reload();
    }

    const getFavoritesCat = () => {
        console.log('Favorites')
    }

    const getSadCat = () => {
        console.log('Sad')
    }

    const getSleepCat = () => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setData(response.sleep)
                setIsReady(true)
            })
        setSearchValue('')
    }

    const getKidsCat = () => {
        console.log('Kids')
    }

    return (
        <>
            <Titel />
            <main className="content-yom">
                <h1>{titel}</h1>
                <p>{description}</p>
                <div className="cat-yom">
                    <Category
                        getAllCat={getAllCat}
                        getFavoritesCat={getFavoritesCat}
                        getSadCat={getSadCat}
                        getSleepCat={getSleepCat}
                        getKidsCat={getKidsCat}
                    />
                </div>
                <div className="search-yom">
                    <Search getSearchValue={getSearchValue} />
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
                        <ContentSearch data={searchValue != 0 ? searchedData : data} />
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