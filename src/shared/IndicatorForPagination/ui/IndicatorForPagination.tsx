import { FC } from 'react';
import cls from './IndicatorForPagination.module.scss'
import { IIndicatorForPaginationProps } from '@/src/app/types';

const IndicatorForPagination: FC<IIndicatorForPaginationProps> = ({
  activeIndex, 
  length,
  onChange
}) => {
  const maxIndicator = length;
  return (
    <>
      {Array.from(Array(maxIndicator), (_, index) => {
        const isActive: any = index === activeIndex;
        return (
          <div
            key={index}
            className={
              isActive
              ? cls.active 
              : cls.carousel_indicator_dots
            }
            onClick={(isActive === index) ? ()=>{} : () => onChange(index)}
          />
        )
      })}
    </>
  )
};

export default IndicatorForPagination