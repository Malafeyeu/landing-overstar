'use client'

import cls from './HomePage.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import bg from '@/src/shared/assets/proj.gif';
import { Carousel, SelectedProject } from '@/src/widgets';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [showGame, setShowGame] = useState(false);

  const handleShowGame = () => {
    setShowGame(!showGame);
  };

  const handleBackButtonClick = () => {
    setActiveIndex(activeIndex);
    setShowGame(false);
  };

    return (
      <div className={cls.container_main}>
        <Image
          className={cls.container_main__bg}
          src={bg}
          alt='background main'
        />
        {showGame ? (
          <SelectedProject
            id={activeIndex} 
            onClick={handleBackButtonClick}
          />
        ) : (
        <div className={cls.block_flex}>
          <h2 className={cls.block_flex__title}>Our projects</h2>
          <Carousel
            onClick={handleShowGame}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        )
      }
    </div>
  );
};

export default HomePage;