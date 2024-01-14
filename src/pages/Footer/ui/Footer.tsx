'use client'

import cls from './Footer.module.scss';
import star from '@/src/shared/assets/Star.png';
import { 
  Telegram, 
  Twitter,
  Youtube,
  Discord,
} from '@/src/shared/assets/variables';
import Image from 'next/image';
import { IconLink } from '@/src/shared';
import { FormEmail } from '@/src/features';

const arrIcons = [
  {telegram: Telegram},
  {twitter: Twitter},
  {youtube: Youtube},
  {discord: Discord},
];

const Footer = () => {
  return (
    <footer className={cls.container_footer}>
      <div className={cls.flex_block}>
        <div className={cls.upper_block}>
          <div className={cls.block_w_logo}>
            <Image
              src={star}
              alt='img'
              className={cls.block_w_logo__logo}
              priority
              quality={100}
            />
            <h2 className={cls.block_w_logo__title}>Overstar</h2>
          </div>
          <span className={cls.upper_block__title}>Subscribe for our vacancies Make your vision real</span>
          <FormEmail/>
          <div className={cls.border_bottom}/>
        </div>
        <div className={cls.bottom_block}>
          <span className={`${cls.bottom_block__info} ${cls.mobile}`}>Copyright ⓒ 2023 Overstars All rights reserved.</span>
          <nav className={cls.flex_block_w_links}>
            {arrIcons.map((el: any, index: number) => {
              for(let key in el) {
                return (
                  <IconLink
                    alt={key}
                    svg={el[key]}
                    href={key}
                    key={index}
                  />
                )
              };
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;