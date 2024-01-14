import clsDesktop from './NavbarDesktop.module.scss';
import clsMobile from './NavbarMobile.module.scss';
import clsHomePage from '@/src/pages/HomePage/ui/HomePage.module.scss';
import clsCareer from '@/src/pages/Career/ui/Career.module.scss';
import clsAboutUs from '@/src/pages/AboutUs/ui/AboutUs.module.scss';
import clsContact from '@/src/pages/Footer/ui/Footer.module.scss';
import { FC } from 'react';
import { AppLink } from '@/src/shared';
import { INav, INavLinks, INavProps } from '@/src/app/types';

export const navLinks: INavLinks = {
  [INav.NAV_DESKTOP]: [
    {
      id: 1,
      className: clsDesktop.nav_list__item,
      content: 'Games',
      propsLink: {
        to: clsHomePage.container_main,
        spy: true,
        smooth: true
      }
    },
    {
      id: 2,
      className: clsDesktop.nav_list__item,
      content: 'Career',
      propsLink: {
        to: clsCareer.container_career,
        spy: true,
        smooth: true
      }
    },
    {
      id: 3,
      className: clsDesktop.nav_list__item,
      content: 'About us',
      propsLink: {
        to: clsAboutUs.container_aboutUs,
        spy: true,
        smooth: true
      }
    }
  ],

  [INav.NAV_MOBILE]: [
    {
      id: 1,
      className: clsMobile.nav_list__item_games,
      content: 'Games',
      propsLink: {
        to: clsHomePage.container_main,
        spy: true,
        smooth: true,
        offset: -30
      }
    },
    {
      id: 2,
      className: clsMobile.nav_list__item,
      content: 'Career',
      propsLink: {
        to: clsCareer.container_career,
        spy: true,
        smooth: true,
        offset: -30
      }
    },
    {
      id: 3,
      className: clsMobile.nav_list__item,
      content: 'About us',
      propsLink: {
        to: clsAboutUs.container_aboutUs,
        spy: true,
        smooth: true,
        offset: -30
      }
    },
    {
      id: 4,
      className: clsMobile.nav_list__item,
      content: 'Contact',
      propsLink: {
        to: clsContact.container_footer,
        spy: true,
        smooth: true
      }
    }
  ]
};

export const NavBar: FC<{links: INavProps[]; onClick?: () => void}> = ({links, onClick}) => {
  return (
    <ul className={links === navLinks[INav.NAV_DESKTOP] ? clsDesktop.nav_list : clsMobile.nav_list}>
      {links.map((el) => {
        const { id, content, className, propsLink } = el;
        const { to, spy, smooth, offset } = propsLink;
        return (
          <AppLink
            key={id}
            to={to}
            spy={spy}
            smooth={smooth}
            offset={offset}
          >
            <li className={className} onClick={onClick}>{content}</li>
          </AppLink>
        )
      })}
    </ul>
  )
}