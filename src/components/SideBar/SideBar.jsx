import { useSelector } from 'react-redux';

import { DQTurkiye } from '@/assets/svg';
import { MenuItem } from '@/components';
import { menuContext } from '@/util/menuContext';

import './SideBar.css';

export default function SideBar() {
  const isMenuClosed = useSelector((state) => state.menu.closed);

  return (
    <div className={`sidemenu-wrapper ${isMenuClosed ? 'closed' : ''}`}>
      <div className="logo-wrapper">
        <DQTurkiye />
      </div>

      <nav>
        <ul className="sidemenu ps-0">
          {menuContext.map((item, i) => (
            <MenuItem data={item} key={i} isSideMenuClosed={isMenuClosed} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
