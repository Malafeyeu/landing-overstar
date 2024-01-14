'use client'

import { Pagination } from '@/src/features/Pagination';
import cls from './Carousel.module.scss';
import proj from '@/src/shared/assets/proj.png';
import proj2 from '@/src/shared/assets/proj2.png';
import proj3 from '@/src/shared/assets/proj3.png';
import proj4 from '@/src/shared/assets/proj4.png';
import proj5 from '@/src/shared/assets/proj5.png';
import { CardFromCarousel } from '@/src/shared';
import { FC } from 'react';
import { ICarouselProps, IItemsFromCarousel } from '@/src/app/types';

const items: IItemsFromCarousel[] = [
  {
    id: 1,
    url: proj4,
    alt: 'image with project game',
  },
  {
    id: 2,
    url: proj5,
    alt: 'image with project game',
  },
  {
    id: 3,
    url: proj,
    alt: 'image with project game',
  },
  {
    id: 4,
    url: proj2,
    alt: 'image with project game',
  },
  {
    id: 5,
    url: proj3,
    alt: 'image with project game',
  }
]

const Carousel: FC<ICarouselProps> = ({
  onClick,
  activeIndex,
  setActiveIndex
}) => {
  const handleChange = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className={cls.block_carousel}>
      <article className={cls.carousel}>
        {items.map((item, index) => {
          const { url, alt, id, } = item;
          return (
            <CardFromCarousel
              key={id}
              url={url.src}
              alt={alt}
              index={index}
              activeIndex={activeIndex}
              onChange={handleChange}
              onClick={onClick}
            />
          )
        })}
      </article>
      <Pagination
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        itemsLength={items.length}
        onClick={handleChange}
      />
    </section>
  );
};

export default Carousel;