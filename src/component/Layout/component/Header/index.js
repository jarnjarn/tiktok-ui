import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/acsset/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input type="text" placeholder="Search" spellCheck="false" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            {' '}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}
export default Header;
