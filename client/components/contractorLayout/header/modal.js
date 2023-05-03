import React from "react";
import s from './modal.module.css'

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modal_dialog} onClick={e => e.stopPropagation()}>
        <div className={s.modal_header}>
          <h3 className={s.modal_title}>{title}</h3>
          <span className={s.modal_close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={s.modal_body}>
          <div className={s.modal_content}>{content}</div>
        </div>
        {footer && <div className={s.modal_footer}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal