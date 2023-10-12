// import PropTypes from 'prop-types'
// import * as styles from './MyBtn.css'
// import { Button } from 'react-bootstrap'

// const MyBtn = ({ children, loadingState, onClick,outline, navbar }) => {
//   return (
//     <Button 
//       className={styles.btn}
//       type={onClick ? "button" : "submit"} 
//       onClick={onClick}
//       disabled={loadingState ? 1 : 0}
//       outline={outline ? 1 : 0}
//       navbar={navbar ? 1 : 0}
//     >
//       {children}
//     </Button>
//   )
// }

// MyBtn.propTypes = {
//   children: PropTypes.any,
//   loadingState: PropTypes.bool,
//   outline: PropTypes.bool,
//   navbar: PropTypes.bool,
//   type: PropTypes.string,
// }

// export default MyBtn

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
