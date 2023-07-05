import React from 'react';
import styles from './FormModal.module.css';

const FormModal = (props) => {
  // console.log(`State passed from parent : ${props.modalState}`);
  const modalWidth = props.width ? `${props.width}` : '90%';
  const modalHeight = props.height ? `${props.height}` : 'fit-content';
  const baseColor = props.baseColor
    ? `${props.baseColor}`
    : 'rgb(17, 16, 16)';

  return props.modalState === false ? null : (
    <div
      className={styles.modal}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="formModalTitle"
    >
      <div
        className={styles.modalContent}
        style={{
          width: modalWidth,
          height: modalHeight,
          border: `1px solid ${baseColor}`,
        }}
      >
        <div
          className={styles.modalHeader}
          style={{ backgroundColor: baseColor }}
        >
          <span
            className={styles.close}
            onClick={() => props.toggleFormModal()}
          >
            &times;
          </span>
          <h5 className="h4" id="formModalTitle">
            {props.moduleName}
          </h5>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default FormModal;
