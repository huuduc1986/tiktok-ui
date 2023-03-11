import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label, isSeeAll = false, data=[], onViewChange }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {data.map((account)=>(
        <AccountItem key={account.id} data={account} />
      ))}
      <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeAll)} >
          {isSeeAll ? 'See less' : 'See all' }
      </p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: propTypes.string.isRequired,
  data: propTypes.array,
};

export default SuggestedAccounts;
