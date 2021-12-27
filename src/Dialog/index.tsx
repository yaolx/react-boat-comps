import React, { FC } from 'react';
import './index.less';
interface DialogProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}
const Dialog: FC<DialogProps> = ({ children, onClick, type = 'dialog' }) => {
  return (
    <div className={'biz_dev_dialog'} onClick={onClick}>
      {children}
    </div>
  );
};
export default Dialog;
