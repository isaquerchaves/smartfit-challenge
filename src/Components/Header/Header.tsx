import styles from './Header.module.css';
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={logo} alt='logomarca' />
        </div>
    </header>
  )
}

export default Header