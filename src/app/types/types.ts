import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { LinkProps } from 'react-scroll';

interface ICarouselProps {
  onClick: () => void;
  activeIndex: number;
  setActiveIndex: (e: number) => void;
}

interface IItemsFromCarousel {
  id: number;
  url: StaticImageData;
  alt: string;
}

interface ICardFromCarouselProps {
  url: string;
  alt: string;
  onChange: (e: number) => void;
  activeIndex: number;
  index: number;
  onClick: (e: number) => void;
}

interface IPaginationProps {
  setActiveIndex: (e: number) => void;
  activeIndex: number;
  itemsLength: number;
  onClick: (e: number) => void;
}

interface IIndicatorForPaginationProps {
  activeIndex: number;
  length: number;
  onChange: (e: number) => void;
}

interface ILinksProps {
  to: string;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
}

interface INavProps {
  id: number;
  className: string;
  content: string;
  propsLink: ILinksProps;
}

enum INav {
  NAV_DESKTOP = 'NAV_DESKTOP',
  NAV_MOBILE = 'NAV_MOBILE'
}

interface INavLinks {
  [INav.NAV_DESKTOP]: INavProps[];
  [INav.NAV_MOBILE]: INavProps[];
}

interface IItemsProject {
  id: number;
  title: string;
  description: string;
  media: string;
}

interface ISelectedPostProps {
  onClick: () => void;
  id: number;
}

interface IIconLinkProps {
  svg: string;
  alt: string;
  href: string;
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

interface IJob {
  img: StaticImageData;
  title: string;
  requirements1: string;
  requirements2: string;
  requirements3: string;
  requirements4: string;
  requirements5: string;
}


export {
  type ICarouselProps,
  type IItemsProject,
  type ICardFromCarouselProps,
  type IPaginationProps,
  type IIndicatorForPaginationProps,
  type ILinksProps,
  type INavProps,
  INav,
  type INavLinks,
  type IItemsFromCarousel,
  type ISelectedPostProps,
  type IIconLinkProps,
  type AppLinkProps,
  type IJob
}