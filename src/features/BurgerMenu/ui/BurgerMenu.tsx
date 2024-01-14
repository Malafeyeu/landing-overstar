import { useState } from 'react';
import BurgerActive from './burgerIcons/BurgerActive';
import BurgerClose from './burgerIcons/BurgerClose';
import cls from './BurgerMenu.module.scss';
import { INav } from '@/src/app/types';
import { NavBar, navLinks } from '@/src/entities';

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const handler = () => {
    setActive(!active);
  };

  return (
    <div className={cls.burger_menu}>
      {!active
      ? <BurgerActive onClick={handler} />
      : <>
        <BurgerClose onClick={handler} />
        <nav className={cls.nav}>
          <NavBar links={navLinks[INav.NAV_MOBILE]} onClick={handler}/>
        </nav>
        <div className={cls.overlay}/>
      </>
      }
    </div>
  );
};

export default BurgerMenu;