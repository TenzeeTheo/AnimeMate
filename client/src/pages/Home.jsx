import * as styles from './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import { Image } from 'react-bootstrap';

// Image i need for display
import bg from '../assets/bg.png';
import Naruto from '../assets/naruto.jpeg';
import OP from '../assets/one.jpeg';
import jjk from '../assets/jjk.jpeg';
// Image i need for display



  const imageStyle = {
    width: '100%',
    height: '600px',
    
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
      <a href="/store/mangas" className={styles.btn}>Shop Now</a>
      </Carousel.Caption>
     


  </div>
  )
}

export default Home