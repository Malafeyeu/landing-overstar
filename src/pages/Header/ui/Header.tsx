
import cls from './Header.module.scss'
import Image from 'next/image'
import earthGif from '@/src/shared/assets/giphy.gif'
import maskGif from '@/src/shared/assets/Mask.gif';
import { HeaderMenu } from '@/src/widgets';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className={cls.container_header}>
      <HeaderMenu />
      <div className={cls.block_w_gif}>
        <Image
          className={cls.block_w_gif__maskGif}
          src={maskGif}
          priority
          alt={'mask gif'}
          unoptimized={true}
        />
        <div className={cls.block_w_content}>
          <h1 className={cls.block_w_content__title}>OVERSTARS GAMES</h1>
        </div>
        <div className={cls.block_w_earthGif}>
          <Image 
            className={cls.block_w_earthGif__earthGif} 
            src={earthGif} 
            priority
            quality={100}
            alt={'earth gif'}
            unoptimized={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;