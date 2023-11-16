import * as styles from './Btn.css';

const Btn = ({children}) => {
  return (
    <div className={styles.btn}>
        {children}
    </div>
  )
}

export default Btn