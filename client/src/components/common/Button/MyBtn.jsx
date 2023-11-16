import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './MyBtn.css';

const MyBtn = ({ children, loadingState, onClick, outline, }) => {
  return (
    <button
      className={styles.btn}
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      disabled={loadingState ? true : false}
      style={outline ? { border: '1px solid black' } : null}
    >
      {children}
    </button>
  );
}

MyBtn.propTypes = {
  children: PropTypes.any,
  loadingState: PropTypes.bool,
  outline: PropTypes.bool,
  navbar: PropTypes.bool,
};

export default MyBtn;
