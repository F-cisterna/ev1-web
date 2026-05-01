import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>GuitarShop</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/desarrollador">Desarrollador</Link></li>
      </ul>
    </nav>
  );
}