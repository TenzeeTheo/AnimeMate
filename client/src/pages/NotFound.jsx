import * as styles from './NotFound.css'
import { Image } from 'react-bootstrap'
import NotFoundImg from '../assets/NotFound.png'
import 'animate.css/animate.min.css'; 

const NotFound = () => {
  return (
    <div className={styles.con}>

      <Image  src={NotFoundImg} className={styles.Nimg} >
      </Image >
      <h1 className="animate__animated animate__fadeInDownBig">404 Error Page....</h1>
        <p className=" animate__animated animate__fadeInUpBig">You are Not Suppose to be Here....</p>
    </div>

    
  )
}

export default NotFound