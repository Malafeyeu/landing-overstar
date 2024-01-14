import { ButtonHTMLAttributes, FC } from "react";
import './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  SUBMIT = 'submit',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | any;
  theme?: ThemeButton | any;
}

const Button: FC<ButtonProps> = (props) => {

  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button 
      className={className}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;