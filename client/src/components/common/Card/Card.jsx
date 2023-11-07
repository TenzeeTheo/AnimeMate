import * as styles from "./Card.css";
import logo from '../../../assets/justtv.svg'

const Card = ({title,authform, children}) => {
  return (
    <div className={styles.bg}>

      <div className={`${styles.card} ${authform ? styles.authForm : styles.generalForm}`}>
        <img className={styles.logo} src={logo}/>
          <h2 className={styles.cardHeading}>{title}</h2>
            <div>{children}</div>
      </div>

  </div>
  )
}

export default Card

  

