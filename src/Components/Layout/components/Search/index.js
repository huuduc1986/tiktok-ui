import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
} 
from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [SearchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const inputRef = useRef()
  useEffect(() => {
    setTimeout(() => setSearchResult([1,1]), 3000);
  }, []);
  const handleClear = ()=>{
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  }
  const hideResult = ()=>{
    setShowResult(false)
  }

    return ( 
        <HeadlessTippy
          interactive
          visible={showResult && SearchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
          onClickOutside={hideResult}
        >
          <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search accounts and video" 
                spellCheck={false}
                onChange={e=> setSearchValue(e.target.value)}
                onFocus={()=>setShowResult(true)}
             />
            {!! searchValue && (
                <button className={cx('clear')} 
                        onClick={handleClear}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}
            
            {/*<FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
     );
}

export default Search;