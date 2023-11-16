import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import bg from '../../assets/image/bg.svg';
import * as styles from './Layout.css';

const Layout = () => {
  const location = useLocation();

  // Check if the current route is the Home page
  const isHomePage = location.pathname === '/';

  // Define the background style based on the route condition
  const bgStyle = isHomePage
    ? {}
    : {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh',
      };

  return (
    <div className={styles.app} style={bgStyle}>
      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
