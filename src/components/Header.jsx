import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚛️</span>
          <span className={styles.logoText}>Mi App</span>
        </div>

        {/* Navegación escritorio */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#acerca" className={styles.navLink}>Acerca</a>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
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
