import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { HomeIcon, HomeActiveIcon, GroupIcon, GroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/Components/Icons';
import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<GroupIcon />}
          activeIcon={<GroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
