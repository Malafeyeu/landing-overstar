'use client'

import { IJob } from '@/src/app/types';
import cls from './CardFromCareer.module.scss';
import Image from 'next/image';
import { FC } from 'react';

const CardFromCareer: FC<IJob> = ({
  img,
  title,
  requirements1,
  requirements2,
  requirements3,
  requirements4,
  requirements5
}) => {
  return (
    <article className={cls.block_card}>
      <Image 
        className={cls.block_card__img} 
        src={img.src}
        priority
        quality={100}
        alt={'icon'}
        width={img.width}
        height={img.height}
      />
      <h5 className={cls.block_card__title}>{title}</h5>
      <ul className={cls.list}>
        <li className={cls.list__item}>
          <span>{requirements1}</span>
        </li>
        <li className={cls.list__item}>
          <span>{requirements2}</span>
        </li>
        <li className={cls.list__item}>
          <span>{requirements3}</span>
        </li>
        <li className={cls.list__item}>
          <span>{requirements4}</span>
        </li>
        <li className={cls.list__item}>
          <span>{requirements5}</span>
        </li>
      </ul>
    </article>
  );
};

export default CardFromCareer;