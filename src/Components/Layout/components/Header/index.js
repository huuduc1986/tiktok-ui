import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCircleQuestion, 
    faCircleXmark, 
    faCloudUpload, 
    faCoins, 
    faEarth, 
    faEllipsisVertical, 
    faGear, 
    faKeyboard, 
    faMagnifyingGlass, 
    faMessage, 
    faSignOut, 
    faSpinner, 
    faUser} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import  'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Button from '~/Components/Button';
import styles from './Header.module.scss';
import images from '~/access/image';
import AccountItem from '~/Components/AccountItem';
import Menu from '~/Components/Popper/Menu';

const cx = classNames.bind(styles);
const MenuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarth} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: './feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    const [SearchResult, setSearchResult] = useState([]);
    const currentUser = true ;

    useEffect(()=>{
        setTimeout(()=>(
            setSearchResult([])
        ),3000)
    }, []);
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
                    // Change 
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@hoaa' 
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './coin' ,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: './setting' 
        },
        ...MenuItem,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: './logout',
            separate: true, 
        }
    ]
    return  <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy 
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
            </HeadlessTippy>
            <div className={cx('actions')}>
            { currentUser ? (
                <>
                <Tippy content='Upload video' placement='bottom' delay={[0, 200]}>
                    <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={ faCloudUpload } />
                    </button>
                </Tippy>
                </>
            ) : (
                <>
                    <Button text>Upload</Button>
                    <Button primary >Log in</Button>
                    
                </>
            )}
                <Menu items={currentUser ? userMenu : MenuItem } onChange={handleMenuChange} >
                    {currentUser ? (
                        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1677812400&x-signature=kua7U1DCv5uvZMl4Tnzq1APwQOs%3D' 
                        className={cx('user-avatar')} alt='user' />
                    ) : ( 
                        <> 
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </>
                    )}
                </Menu>   
            </div>  
        </div>
    </header>;
     
}

export default Header;