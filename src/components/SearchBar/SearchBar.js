import { useState } from 'react';
import './SearchBar.css';

import search from '../../images/Search.svg';

function SearchBar() {
    const [isSearchBarVisible, setisSearchBarVisible] = useState(false);

    const toggleSearchBar = () => {
            setisSearchBarVisible(true);
    }

    return (
        <>
            <button className='search__button' onClick={toggleSearchBar}>
                <img className='search__img' alt='search' src={search}/>
            </button>
            <input className={`search__input ${isSearchBarVisible ? 'search__input-visible' : ''}`} placeholder='подбор земельных участков'/>
        </>
    )
}

export default SearchBar;