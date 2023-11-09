import { useState } from 'react';
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import logo from '../../assets/manga.svg';
import users from '../../assets/User.svg';
import bag from '../../assets/bag.svg';
import * as styles from './Header.css';
import Cart from '../use/Cart';
import useAuth from '../../hooks/useAuth';


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {


  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const auth = useAuth();

  // Function to handle logging in or out
  const handleLoginToggle = () => {
    // Assuming you have a function to handle login/logout in your AuthContext
    if (auth.user?.id) {
      // User is logged in, call logout function
      auth.logout();
    } else {
      // User is logged out, call login function
      auth.login();
    }
  };



  return (
    <Navbar  expand="lg" className={styles.Content}>
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo of book" /> AnimeMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Dropdown as={ButtonGroup}>
            <Button variant="Secondary" href='/store/mangas' >MANGA</Button>

            <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item href="/store/best-seller">BEST-SELLER</Dropdown.Item>
                <Dropdown.Item href="/store/popular-series"> POPULAR SERIES</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
         

        </Navbar.Collapse>
        <Nav>
          {/* User and Cart icons */}
      <Dropdown >
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            <img className={`${styles.user} ${styles.userWithAnimation}`} src={users} alt="user icon" />
        </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile"> Profile</Dropdown.Item>
              <Dropdown.Item href="/Favorite"> Favorite</Dropdown.Item>
              <Dropdown.Item href="/login"  onClick={handleLoginToggle}> {auth.user?.id ? "Log Out" : "Log In"}</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
          <Nav.Link>
            <img className={styles.bag} src={bag} onClick={handleShowCart} alt="bag icon" />
            <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
          </Nav.Link>

          {/* Dark Mode Switch Button */}
          {/* <Nav.Link>
            <button >
           
            </button>
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;



