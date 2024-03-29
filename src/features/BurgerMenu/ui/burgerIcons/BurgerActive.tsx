import { FC } from 'react';

const BurgerActive: FC<any> = ({onClick}) => {
  return (
    <svg
      style={{
        cursor: 'pointer'
      }}
      onClick={onClick} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" y="5" width="19" height="2" rx="1" fill="white"/>
      <rect x="2.5" y="11" width="19" height="2" rx="1" fill="white"/>
      <rect x="2.5" y="17" width="19" height="2" rx="1" fill="white"/>
    </svg>
  );
};

export default BurgerActive;