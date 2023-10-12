import {useState} from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/manga.svg';
import user from '../../assets/User.svg';
import bag from '../../assets/bag.svg'
import * as styles from './Header.css';
import Cart from '../../pages/page/Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo of book" /> AnimeMate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="MANGA" id="nav-dropdown-dark-example" menuVariant="dark">
              <NavDropdown.Item href="/best-seller">BEST-SELLERS</NavDropdown.Item>
              <NavDropdown.Item href="/popular-series">POPULAR SERIES</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav> {/* User icon placed at the end of the header */}
          <Nav.Link href="/login">
            <img className={`${styles.user} ${styles.userWithAnimation}`} src={user} alt="user icon" />
          </Nav.Link>
          <Nav.Link >
              <img className={styles.bag} src={bag} onClick={handleShowCart} alt="bag icon" />
              <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  
  );
};

export default Header;
