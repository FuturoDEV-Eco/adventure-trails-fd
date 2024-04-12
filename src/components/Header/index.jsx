import styles from "./style.module.css"

function Header() {
  return ( 
    <header className={styles.header}>
      <h4>Adveture Trails FD</h4>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Explorar Trilhas</a>
        <a href="#" className={styles.link}>Cadastrar Trilhas</a>
      </nav>
    </header>
  );
}

export default Header;