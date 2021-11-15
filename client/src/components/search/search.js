import './search.scss'
import { useState } from 'react'

const Search = () => {
    const [searchValue, setSearchValue] = useState()
    console.log(searchValue)
    return (<div id={'search'}>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" name="" id="" />
        <img src='/images/icons/magnifier.svg' alt="Search" />
    </div>);
}

export default Search;