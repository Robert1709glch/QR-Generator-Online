import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../assets/MyQR.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <img src={logo} alt="Mi app" className={styles.logoImage} />
          </span>
          <span className={styles.logoText}>Mi App</span>
        </div>

        {/* Navegación en web */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#historial" className={styles.navLink}>Historial</a>
        </nav>

        {/* Botón menú móvil */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`} />
        </button>
      </div>
    </header>
  )
}

export default Header
