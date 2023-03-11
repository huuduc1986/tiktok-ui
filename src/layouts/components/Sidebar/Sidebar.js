import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import { HomeIcon, HomeActiveIcon, GroupIcon, GroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/Components/Icons';
import SuggestedAccounts from '~/Components/SuggestedAccounts';
import * as userServices from '~/services/userServices';


const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
const [page, setPage] = useState(INIT_PAGE);
const [isSeeAll, setIsSeeAll] = useState(false);
const [suggestedUser, setSuggestedUser] = useState([]);
  useEffect(() => {
    userServices
      .getSuggested({page, perPage: PER_PAGE})
      .then((data) => {
        setSuggestedUser(prevUsers => [...prevUsers, ...data])
        //console.log({data})
      })
      .catch((error) => console.log(error));
  }, [page])
const handleViewChange = (isSeeAll) => {
  setIsSeeAll((prevState) => !prevState)
  if(isSeeAll){
    setPage(page + 1)
  } else {
  
  }
 } ;
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
      <SuggestedAccounts 
        label="Suggested accounts" 
        data={suggestedUser} 
        isSeeAll={isSeeAll}
        onViewChange={handleViewChange} 
      />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
