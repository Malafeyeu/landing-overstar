'use client'

import cls from './Career.module.scss';
import { useEffect, useState } from 'react';
import img1 from '@/src/shared/assets/Fire.png';
import img2 from '@/src/shared/assets/Hearth.png';
import img3 from '@/src/shared/assets/User.png';
import { StaticImageData } from 'next/image';
import { CardFromCareer } from '@/src/shared';

export interface IJob {
  img: StaticImageData;
  title: string;
  requirements1: string;
  requirements2: string;
  requirements3: string;
  requirements4: string;
  requirements5: string;
}

const job: IJob[] = [
  {
    img: img1,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
  {
    img: img2,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
  {
    img: img3,
    title: 'Junior Unity Developer',
    requirements1: 'Good understanding of game design and mechanics',
    requirements2: `Bachelor's degree in BSUIR or BSU`,
    requirements3: `Gay Orientation`,
    requirements4: `Passion for gaming and staying updated with industry trends`,
    requirements5: `Good communication and teamwork abilities`
  },
];

const Career = () => {
  const [careerData, setCareerData] = useState<IJob[]>([]);

  useEffect(() => {
    return setCareerData(job);
  }, []);
  return (
    <section className={cls.container_career}>
      <div className={cls.block_flex}>
        <h2 className={cls.bloc_flex__title}>Career</h2>
        <div className={cls.block_flex_w_cards}>
          {careerData.map((el, i) => 
            <CardFromCareer {...el} key={el.requirements1 + i} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Career;
