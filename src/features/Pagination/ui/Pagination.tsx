import { IndicatorForPagination } from '@/src/shared';
import cls from './Pagination.module.scss'
import { FC } from 'react';
import { IPaginationProps } from '@/src/app/types';

const Pagination: FC<IPaginationProps> = ({
  setActiveIndex,
  activeIndex,
  itemsLength,
  onClick
}) => {
  const handleNext = () => {
    setActiveIndex(activeIndex === itemsLength - 1 ? 0 : activeIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? itemsLength - 1 : activeIndex - 1);
  };
  return (
    <nav className={cls.block_w_nav}>
      { activeIndex > 0 
        ? (
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={handlePrev}
          >
            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) 
        : <div className={cls.end} />
      }
      <IndicatorForPagination 
        activeIndex={activeIndex}
        length={itemsLength}
        onChange={onClick}
      />
      { activeIndex < itemsLength - 1 ? (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
          fill='none'
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleNext}
        >
          <path 
            d="M5 12H19" 
            stroke="white"  
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : <div className={cls.end} />}
    </nav>
  )
};

export default Pagination;