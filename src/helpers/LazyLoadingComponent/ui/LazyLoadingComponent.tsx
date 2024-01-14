import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const LazyLoadComponent = () => {
  const [items, setItems] = useState<number[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    // Загрузка данных (может быть ваш запрос к API)
    const newItems = Array.from({ length: 10 }, (_, index) => items.length + index + 1);
    setItems([...items, ...newItems]);

    // После успешной загрузки данных, решите, есть ли еще элементы для загрузки
    setHasMore(items.length < 50); // Например, загружайте только первые 50 элементов
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p>No more items</p>}
    >
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </InfiniteScroll>
  );
};

export default LazyLoadComponent;
