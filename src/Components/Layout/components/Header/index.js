import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Button from '~/Components/Button';

import styles from './Header.module.scss';
import images from '~/access/image';
import AccountItem from '~/Components/AccountItem';

const cx = classNames.bind(styles)
function Header() {
    const [SearchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        setTimeout(()=>(
            setSearchResult([])
        ),3000)
    }, [])
    return  <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy 
                    interactive
                    visible={SearchResult.length >0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />

                            </PopperWrapper>
                        </div>   
                    )}>
                <div className={cx('search')}>
                <input placeholder="Search accounts and video" spellCheck={false}/>
                <button className={cx('clear')}>
                   <FontAwesomeIcon icon={faCircleXmark} />
                </button>

                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                
                <button className={cx('search-btn')}>
                   <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                </div>
                </Tippy>
                <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary >Log in</Button>

                </div>
            </div>
        </header>;
     
}

export default Header;