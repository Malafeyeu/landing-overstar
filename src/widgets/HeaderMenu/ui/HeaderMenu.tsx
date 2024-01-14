'use client'

import cls from './HeaderMenu.module.scss';
import clsHeader from '@/src/pages/Header/ui/Header.module.scss';
import clsContact from '@/src/pages/Footer/ui/Footer.module.scss';
import { BurgerMenu } from '@/src/features';
import { AppLink, LogoMain } from '@/src/shared';
import { INav } from '@/src/app/types';
import { NavBar, navLinks } from '@/src/entities';

const HeaderMenu = () => {
  return (
    <header className={cls.header}>
      <div className={cls.flex_box}>
        <nav className={cls.nav}>
          <AppLink
            to={clsHeader.container_header}
            spy={true}
            smooth={true}
          >
            <LogoMain />
          </AppLink>
          <BurgerMenu />
          <NavBar links={navLinks[INav.NAV_DESKTOP]} />
          <ul className={cls.nav_list}>
            <AppLink
              to={clsContact.container_footer}
              spy={true}
              smooth={true}
            >
              <li className={cls.nav_list__item_contact}>Contact</li>
            </AppLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;