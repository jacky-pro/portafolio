import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
            <div className={styles.logo}>
                <h1>jackelin nuñez(),</h1>
            </div>

            <nav >
              <ul className={styles.navmenu}>
                <li>
                  <a className={styles.menuopcion} href="#home">Inicio</a>
                </li>
                <li>
                  <a className={styles.menuopcion}  href="#about">Acerca de mi</a>
                </li>
                <li>
                  <a className={styles.menuopcion} href="#services">Servicios</a>
                </li>
                <li>
                  <a  className={styles.menuopcion} href="#portfolio">Portafolio</a>
                 </li>
                <li>
                  <a className={styles.menuopcion}   href="#contact">Contacto</a>
                </li>

              </ul>
            </nav>
        </header>
        <div>
          <section className={styles.home}>
          <div className={styles.homeinfo}>
                    <div className={styles.homedescription}>
                        <span>¡Hola!</span>
                        <h1>Soy Jackelin Nuñez</h1>
                        <span>- Desarrolladora Fronted -</span>
                        <p>Soy parte de la empresa LevelStudio</p>
                    </div>
                </div>
          </section>
        </div>
    </div>
  )
}

