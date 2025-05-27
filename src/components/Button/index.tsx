import React, { useMemo } from 'react';
import clsx from 'clsx';
import './button.scss';

export interface ButtonProps {
  /**
   * 按钮类型
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * 按钮样式
   */
  variant?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';
  /**
   * 是否轮廓按钮
   */
  outline?: boolean;
  /**
   * 按钮尺寸
   */
  size?: 'sm' | 'lg';
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否块级按钮
   */
  block?: boolean;
  /**
   * 自定义样式类名
   */
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = function Button({
  type = 'button',
  variant = undefined,
  outline = false,
  size = undefined,
  disabled = false,
  block = false,
  className = '',
  children = null,
  onClick = undefined,
}) {
  const currentVariants = useMemo(() => {
    if (outline) {
      if (variant) {
        return `btn-outline-${variant}`;
      }
    } else if (variant) {
      return `btn-${variant}`;
    }
    return '';
  }, [outline, variant]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={clsx(
        'btn',
        currentVariants,
        {
          'btn-sm': size === 'sm',
          'btn-lg': size === 'lg',
          'w-100': block,
        },
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
