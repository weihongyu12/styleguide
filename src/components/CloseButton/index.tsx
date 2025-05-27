import React from 'react';
import './close-button.scss';

export interface CloseButtonProps {
  /**
   * 是否禁用按钮
   */
  disabled?: boolean;
  /**
   * 点击事件处理函数
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = function CloseButton({
  disabled = false,
  onClick = undefined,
}) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={handleClick}
    />
  );
};

export default CloseButton;
