import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./style.module.css";
import { AppBar, Toolbar } from "@mui/material";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar component="nav" color="primary">
      <h4>Adveture Trails FD</h4>
      <Toolbar>
        <button onClick={() => toggleTheme()}>Tema</button>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            Explorar Trilhas
          </a>
          <a href="#" className={styles.link}>
            Cadastrar Trilhas
          </a>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
