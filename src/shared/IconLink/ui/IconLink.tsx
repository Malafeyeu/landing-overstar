'use client'

import { FC } from 'react';
import cls from './IconLink.module.scss';
import { IIconLinkProps } from '@/src/app/types';

const IconLink: FC<IIconLinkProps> = ({
  svg,
  alt,
  href
}) => {
  return (
    <a className={cls.link} href={href}>
      {svg || alt}
    </a>
  )
};

export default IconLink;