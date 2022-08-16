import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleHalfStroke,
  faCircleQuestion,
  faCircleXmark,
  faEarthAmericas,
  faEarthAsia,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import Button from '~/component/button';
import styles from './Header.module.scss';
import images from '~/acsset/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Menu from '~/component/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faCircleHalfStroke} />, title: 'Keyboard shorcuts' },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <img src={images.logo} alt="Tiktok" />
        {/* search */}
        <Tippy
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>accout</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search" spellCheck="false" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        {/* actions */}
        <div className={cx('actions')}>
          <Button text>Up load</Button>
          <Button primary>Log in</Button>
          <Menu items={MENU_ITEMS }>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
