import  { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../../assets/manga.svg';
import users from '../../assets/User.svg';
import bag from '../../assets/bag.svg';
import * as styles from './Header.css';
import Cart from '../use/Cart';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user } = useAuth();

  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const auth = useAuth();

  const handleLoginToggle = () => {
    if (auth.user?.id) {
      auth.logout();
    } else {
      auth.login();
    }
  };

  return (
    <Navbar expand="lg" className={styles.Content}>
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo of book" /> AnimeMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* Nav items for small screens */}
          <Navbar.Collapse className="d-lg-none">
          <Nav className="ml-auto">
            <Nav.Item as={Dropdown}>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic" href="/store/mangas">
                MANGA
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/store/best-seller">BEST-SELLER</Dropdown.Item>
                <Dropdown.Item href="/store/popular-series">POPULAR SERIES</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

       
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav >
          {user && <Nav.Item><h3 style={{ marginTop: '30px',textTransform: 'capitalize' }}>{user.username}</h3></Nav.Item>}     
          {/* {console.log(user)} */}
                 
            <Dropdown>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                <img className={`${styles.user} ${styles.userWithAnimation}`} src={users} alt="user icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/Favorite">Favorite</Dropdown.Item>
                <Dropdown.Item href="/login" onClick={handleLoginToggle}>
                  {auth.user?.id ? 'Log Out' : 'Log In'}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link>
              <img className={styles.bag} src={bag} onClick={handleShowCart} alt="bag icon" />
              <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      
      </Container>
    </Navbar>
  );
};

export default Header;
