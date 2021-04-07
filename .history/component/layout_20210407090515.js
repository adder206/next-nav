import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
    return  <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a className={styles.navlogo}>[BrandLogo]</a>
                <ul className={styles.navmenu}>
                    <li className={styles.navitem}>
                        <a className={styles.navlink}>Home</a>
                    </li>
                     <li className={styles.navitem}>
                        
                        <a className={styles.navlink}>About</a>
                
                    </li>
                    <li className={styles.navitem}>
                        <a className={styles.navlink}>Contact</a>
                    </li>
                </ul>
                <button className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
        </header>
            {children}
            {/* </footer> */}
            </>
}