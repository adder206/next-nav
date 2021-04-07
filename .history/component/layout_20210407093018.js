import {useState} from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen)
    return  <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a className={styles.navlogo}>[BrandLogo]</a>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu + ''+ styles.active}>
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
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger + '' +styles.active}
                                    onClick={openMenu}
                                    >
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