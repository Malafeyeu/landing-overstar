import { AppLinkProps } from '@/src/app/types';
import { FC } from 'react';
import { Link } from 'react-scroll';

const AppLink: FC<AppLinkProps> = (props) => {

  const { 
    to,
    smooth,
    className,
    offset,
    children
  } = props;

  return (
    <Link
      to={to || ''}
      smooth={smooth}
      className={className}
      offset={offset}
    >
      {children}
    </Link>
  )
}

export default AppLink