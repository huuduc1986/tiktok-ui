import propTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';


const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img 
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678503600&x-signature=VFwwER%2B9O9demmnU1DfGzeM32u0%3D'
                alt=''
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                   <strong>huuducdo</strong> 
                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>đỗ hữu đức</p>
            </div>
            
        </div>
     );
}

export default AccountItem;