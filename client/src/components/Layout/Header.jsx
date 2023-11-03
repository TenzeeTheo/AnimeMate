import { useState } from 'react';
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import logo from '../../assets/manga.svg';
import user from '../../assets/User.svg';
import bag from '../../assets/bag.svg';
import * as styles from './Header.css';
import Cart from '../utils/Cart';


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <Navbar  expand="lg" className={styles.Content}>
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo of book" /> AnimeMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>

            {/* <NavDropdown   id="nav-dropdown-dark-example" menuVariant="dark">
            <NavDropdown.Item href="/best-seller">BEST-SELLERS</NavDropdown.Item>
            <NavDropdown.Item href="/popular-series">POPULAR SERIES</NavDropdown.Item>
          </NavDropdown> */}

      <Dropdown as={ButtonGroup}>
      <Button variant="Secondary" href='/store/manga' >MANGA</Button>

      <Dropdown.Toggle split variant="Secondary" id="dropdown-split-basic" />
      <Dropdown.Menu>
        <Dropdown.Item href="/store/best-seller">BEST-SELLER</Dropdown.Item>
        <Dropdown.Item href="/store/popular-series"> POPULAR SERIES</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
         

          </Nav>
        </Navbar.Collapse>
        <Nav>
          {/* User and Cart icons */}
          <Nav.Link href="/login">
            <img className={`${styles.user} ${styles.userWithAnimation}`} src={user} alt="user icon" />
          </Nav.Link>
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



