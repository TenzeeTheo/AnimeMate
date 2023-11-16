import { BsFillPencilFill } from 'react-icons/bs';
import * as styles from './Edit.css'

const Edit = ({ children, onClick }) => {
  return (
   
      <BsFillPencilFill 
        className={styles.Btn}
        onClick={onClick}>
        {children}
      </BsFillPencilFill>
  );
};

export default Edit;
