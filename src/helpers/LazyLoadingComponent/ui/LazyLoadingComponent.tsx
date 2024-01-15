'use client'

import AboutUs from '@/src/pages/AboutUs/ui/AboutUs';
import Career from '@/src/pages/Career/ui/Career';
import Footer from '@/src/pages/Footer/ui/Footer';
import HomePage from '@/src/pages/HomePage/ui/HomePage';
import React, { useState, useEffect, FC } from 'react';

const LazyLoadComponent: FC = () => {
  const [loadedComponents, setLoadedComponents] = useState<React.ReactNode[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(0);

  const arrPages = [HomePage, AboutUs, Career, Footer];

  const loadPage = () => {
    if (pageIndex < arrPages.length) {
      const Page = arrPages[pageIndex];
      const newComponent = <Page />
      setLoadedComponents((prevComponent) => [...prevComponent, newComponent]);
      setPageIndex((prevIndex) => prevIndex + 1);
    }
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY + 1 >= document.documentElement.offsetHeight) {
      loadPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageIndex]);
  return (
    <>
      {loadedComponents.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </>
  );
};

export default LazyLoadComponent;