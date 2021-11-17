import './yoga.scss';

import { useState, useEffect } from 'react';

import Titel from '../../components/titel/titel';
import Category from '../../components/category/Category';
import Search from '../../components/search/search';
import Daily from '../../components/daily/daily';
import Nav from '../../components/nav/nav';

import ContentSearch from '../../components/contentSearch/contentSearch';

import CircularProgress from '@mui/material/CircularProgress';

const Yoga = (props) => {

    const { serverAPI } = props;

    const [data, setData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setData(response.yoga);
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
        fetch(serverAPI)
            .then(res => res.json())
            .then(response => {
                setData(response.yoga);
                setIsReady(true);
            });
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
                    <h1>Yoga</h1>
                    <p>Find your inner zen from annywhere.</p>
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
                        <Daily data={searchValue > 0 ? searchedData[0].track : data[0].track} />
                    </div>
                    <div className="search-content">
                        <ContentSearch contentData={searchValue > 0 ? searchedData : data} contentType='yoga' />
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

export default Yoga;