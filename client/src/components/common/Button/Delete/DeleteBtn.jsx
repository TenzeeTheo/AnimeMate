import PropTypes from 'prop-types'
import * as styles from './DeleteBtn.css'

import { BsArchiveFill } from "react-icons/bs";

const DeleteBtn = ({ children, loadingState, onClick }) => {
  return (

  <BsArchiveFill 
    className={styles.Btn}
    type={onClick ? "button" : "submit"} 
    onClick={onClick}
    disabled={loadingState ? 1 : 0} >
      {children}
    </BsArchiveFill>

  
  )
}
DeleteBtn.propTypes = {
  children: PropTypes.any,
  loadingState: PropTypes.bool,
  onClick: PropTypes.func,
}

export default DeleteBtn