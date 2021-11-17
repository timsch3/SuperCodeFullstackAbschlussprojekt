import './meditate.scss';

import { useState, useEffect } from 'react';

import Titel from '../../components/titel/titel';
import Category from '../../components/category/Category';
import Search from '../../components/search/search';
import Daily from '../../components/daily/daily';
import Nav from '../../components/nav/nav';

import ContentSearch from '../../components/contentSearch/contentSearch';

import CircularProgress from '@mui/material/CircularProgress';

const YogaMedi = (props) => {

    const { serverAPI } = props;

    const [data, setData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setData(response.meditation);
                setIsReady(true);
            })
        setSearchValue('');
    }, []);  // eslint-disable-line

    const getSearchValue = (e) => {
        setSearchValue(e);
    }

    useEffect(() => {
        const results = data.filter(elt =>
            elt.track.name.toLowerCase().includes(searchValue)
        );
        setSearchedData(results);
    }, [searchValue]);  // eslint-disable-line

    //category
    const getAllCat = () => {
        window.location.reload();
    }

    const getFavoritesCat = () => {
        console.log('Favorites');
    }

    const getSadCat = () => {
        console.log('Sad');
    }

    const getSleepCat = () => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setData(response.sleep);
                setIsReady(true);
            });
        setSearchValue('');
    }

    const getKidsCat = () => {
        console.log('Kids');
    }

    return (
        <>
            <Titel />
            {isReady
                ?
                <div className="content-yom">
                    <h1>Meditate</h1>
                    <p>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</p>
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
                        <Daily />
                    </div>
                    <div className="search-content">
                        <ContentSearch contentData={searchValue > 0 ? searchedData : data} contentType='meditation' />
                    </div>
                </div>
                :
                <div className="loading">
                    <CircularProgress />
                </div>}
            <Nav />
        </>
    );
}

export default YogaMedi;