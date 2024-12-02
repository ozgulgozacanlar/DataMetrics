import { useSelector, useDispatch } from 'react-redux';

import { setMenu, pinMenu } from '@/app/features/menu';
import { LeftChevron } from '@/assets/svg';

import './NavBar.css';

export default function NavBar() {
  const dispatch = useDispatch();

  const isMenuClosed = useSelector((state) => state.menu.closed);
  const isMenuPinned = useSelector((state) => state.menu.pinned);
  const pageName = useSelector((state) => state.page.name);

  function handleClick() {
    dispatch(setMenu(!isMenuClosed));
    dispatch(pinMenu(!isMenuPinned));
  }

  return (
    <div className="header-wrapper">
      <button type="button" id="collapse-button" onClick={handleClick} aria-label="button">
        <LeftChevron className={isMenuClosed ? 'closed' : 'opened'} />
      </button>
      <div className="topbar">
        <div className="header-title d-flex align-items-center">
          <h1>{pageName}</h1>
        </div>
      </div>
    </div>
  );
}
