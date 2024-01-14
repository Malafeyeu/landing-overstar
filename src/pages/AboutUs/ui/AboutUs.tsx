'use client'

import cls from './AboutUs.module.scss';
import gif from '@/src/shared/assets/AboutUs.gif';
import Image from 'next/image';
import { FC } from 'react';

const AboutUs: FC = () => {
  return (
    <section className={cls.container_aboutUs}>
        <div className={cls.flex_block}>
          <article className={cls.block_w_info}>
            <h2 className={cls.block_w_info__title}>About us</h2>
            <Image
              className={cls.block_w_info__img}
              src={gif} 
              priority
              quality={100}
              alt={'gif'}
              width={310}
            />
            <p className={cls.block_w_info__description}>We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.</p>
          </article>
          <Image
            className={cls.flex_block__img}
            src={gif} 
            priority
            quality={100}
            alt={'gif'}
            width={470}
          />
        </div>
    </section>
  )
};

export default AboutUs;