import Image from 'next/image';
import cls from './CardFromCarousel.module.scss'
import { FC } from 'react';
import { ICardFromCarouselProps } from '@/src/app/types';

const CardFromCarousel: FC<ICardFromCarouselProps> = ({
  url,
  alt, 
  onChange,
  activeIndex,
  index,
  onClick
}) => {
  const offset: number = (activeIndex - index) / 4;
  const direction: number = Math.sign(activeIndex - index);
  const obsOffset: number = Math.abs(offset);

  const calculateTransformProperties: string = `
    rotateY(calc(${offset} * 80deg))
    scaleY(calc(1 + ${obsOffset} * -.1))
    translateX(calc(${direction} * -10rem))
    translateZ(calc(${obsOffset} * -60rem))
  `;

  const calculateOpacity: string = `${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;
  const calculateDisplay: string = `${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}`;

  const handleClick = (index: number) => {
    onChange(index);
    if (activeIndex === index) {
      onClick(index);
    }
  }
  return (
    <Image
      src={url} 
      alt={alt} 
      className={cls.item} 
      style={{
        transform: calculateTransformProperties,
        opacity: calculateOpacity,
        display: calculateDisplay
      }}
      onClick={() => handleClick(index)}
      priority
      quality={100}
      width={480}
      height={580}
    />
  )
}

export default CardFromCarousel;