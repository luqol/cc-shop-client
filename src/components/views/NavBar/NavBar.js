import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <nav>
      <div className={styles.logo}>
        <NavLink to='/'>ClickCraft</NavLink>
      </div>
      <div className={styles.menu}>
        <ul>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/cart">Cart</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? styles.linkActive : undefined } to="/order">Order</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;