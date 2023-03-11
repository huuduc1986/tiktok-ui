import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/Components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({data}) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          alt={data.nickname}
          src={data.avatar}
        />
        <div>
          <Button className={cx('following-btn')} primary small>
            Follow
          </Button>
        </div>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> }
        </p>
        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{data.followrs_count} </strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>{data.likes_count}</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: propTypes.object.isRequired,
}

export default AccountPreview;
