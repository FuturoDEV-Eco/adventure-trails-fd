import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header className={styles.header}>
      <Link to="/" className={styles.link}><h4>Adveture Trails FD</h4></Link>
      <nav className={styles.nav}>
        <Link to="/lista-trilhas" className={styles.link}>Explorar Trilhas</Link>
        <Link to="/cadastro-trilha" className={styles.link}>Cadastrar Trilhas</Link>
      </nav>
    </header>
  );
}

export default Header;