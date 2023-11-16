import * as styles from './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import { Image } from 'react-bootstrap';
import Btn from '../components/common/Button/Btn';

// Image i need for display
import bg from '../assets/image/bg.png';
import Naruto from '../assets/image/naruto.jpeg';
import OP from '../assets/image/one.jpeg';
import jjk from '../assets/image/jjk.jpeg';
import satoi from '../assets/image/satoi.gif'
// Image i need for display



  const imageStyle = {
    width: '100%',
    height: '600px',
    
  };
  const gifStyle = {
    width: '50%',
    height: '200px',
    
  };
const Home = () => {
  return (
  <div >
    <Carousel>
        <Carousel.Item>
          <Image src={bg} style={imageStyle} />
        </Carousel.Item>

        <Carousel.Item>
          <Image src={jjk} style={imageStyle} />
        </Carousel.Item>

        <Carousel.Item>
          <Image src={Naruto} style={imageStyle} />
        </Carousel.Item>

        <Carousel.Item>
          <Image src={OP} style={imageStyle} />
        </Carousel.Item>
      </Carousel>
      <Carousel.Caption className={styles.captionStyle}>
            <h1><strong>Welcome to Anime Mate</strong></h1>
      </Carousel.Caption>
      <Carousel.Caption className={styles.cap}>
        <Btn >
        <a href="#About" className={styles.visit}>Visit Us to know More</a> 
        </Btn>     
      </Carousel.Caption>

      <section id='About' className={styles.about}>
      <div className="row">
            <div className="column">
                <div className="column-1">
                    <h2>About this Website</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, voluptatibus!</p>
                    
                </div>
            </div>
            <div >
                <div  className={styles.satoi} id="btn">
                    
                    <a ><Image style={gifStyle} src={satoi}  alt="Oreki" /></a> 
                </div>
            </div>
            <div className="column">
                <div className="column-3">
                    <h3>DISCLAIMER:</h3>
                    <p>The images to be found in this website are owned by their respective owners unless otherwise stated. If ever the owner wanted their works to be removed from this site, please do contact the author so that he can comply with it immediately.
                    </p>
                    
                    
                </div>
            </div>
        </div>
      </section>
     


  </div>
  )
}

export default Home