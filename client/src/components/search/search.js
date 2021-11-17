import './search.scss';
import { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState(''); // eslint-disable-line

    const { getSearchValue } = props;

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        getSearchValue(value);
    }

    return (<div id={'search'}>
        <input onChange={handleSearch} type="text" name="" id="" />
        <img src='/images/icons/magnifier.svg' alt="Search" />
    </div>);
}

export default Search;