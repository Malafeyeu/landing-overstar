'use client'
import { FC } from 'react';
import cls from './SelectedProject.module.scss'
import { IItemsProject, ISelectedPostProps } from '@/src/app/types';

const items: IItemsProject[] = [
  {
    id: 1,
    title: 'Game Name 1',
    description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
    media: ''
  },
  {
    id: 2,
    title: 'Game Name 2',
    description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
    media: ''
  },
  {
    id: 3,
    title: 'Game Name 3',
    description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
    media: ''
  },
  {
    id: 4,
    title: 'Game Name 4',
    description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
    media: ''
  },
  {
    id: 5,
    title: 'Game Name 5',
    description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
    media: ''
  },
];

const SelectedProject: FC<ISelectedPostProps> = ({onClick, id}) => {
  const postInfo = () => items.filter(item => item.id === id+1);
  const { title, description, media } = postInfo()[0];
  
  return (
    <section className={cls.container_SelectedGame}>
      <div className={cls.block_w_info}>
        <h2 className={`${cls.block_w_info__title} ${cls.mobile}`}>{title}</h2>
        <p className={`${cls.block_w_info__description} ${cls.mobile}`}>{description}</p>
      </div>
      <div className={`${cls.block_w_media} ${cls.mobile}`}>
        <div className={cls.header_block}>
          <h2 className={`${cls.header_block__title} ${cls.mobile}`}>{title}</h2>
          <div className={cls.header_block__btn_return} onClick={onClick}>
            <span className={cls.btn_return__text}>Go back</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_303_1103)">
                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C15.91 16.69 15.28 16.69 14.89 16.3L12 13.41L9.11 16.3C8.72 16.69 8.09 16.69 7.7 16.3C7.31 15.91 7.31 15.28 7.7 14.89L10.59 12L7.7 9.11C7.31 8.72 7.31 8.09 7.7 7.7C8.09 7.31 8.72 7.31 9.11 7.7L12 10.59L14.89 7.7C15.28 7.31 15.91 7.31 16.3 7.7C16.69 8.09 16.69 8.72 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z" fill="#FFEEEE"/>
              </g>
              <defs>
                <clipPath id="clip0_303_1103">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={cls.media_box}>
          {media}
        </div>
      </div>
    </section>
  );
};

export default SelectedProject;