import * as styles from './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import { Image } from 'react-bootstrap';

// Image i need for display
import bg from '../assets/bg.png';
import Naruto from '../assets/naruto.jpeg';
import OP from '../assets/one.jpeg';
import jjk from '../assets/jjk.jpeg';
// Image i need for display

const Home = () => {
  const imageStyle = {
    width: '100%',
    height: '600px',
    
  };

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
            <button className={styles.btn}>Shop Now</button>
      
      </div>
  );
}

export default Home;
