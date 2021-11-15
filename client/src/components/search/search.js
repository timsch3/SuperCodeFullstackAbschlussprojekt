import './search.scss';
import { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const { getSearchData } = props

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        getSearchData(value)
    }

    return (<div id={'search'}>
        <input onChange={handleSearch} type="text" name="" id="" />
        <img src='/images/icons/magnifier.svg' alt="Search" />
    </div>);
}

export default Search;