import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '~/Components/Image';

const cx = classNames.bind(styles);
function AccountItem({data}) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy 
        interactive 
        offset={[-20, 0]} 
        delay={[700, 0]} 
        placement="bottom" 
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={data.avatar}
            alt={data.first_name}
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: propTypes.array.isRequired
}
export default AccountItem;
