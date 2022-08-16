import Button from '~/component/button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={Date.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
