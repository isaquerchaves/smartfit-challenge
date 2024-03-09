import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";

const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  
  return (
    <footer>
      <div className={styles.footer}>
        <img src={logo} alt="logo" />
        <p>Todos os direitos reservados {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
