import Link from 'next/link';
import {useState} from "react";
import styles2 from "../styles2/Layout.module.css";
import styles from '../styles2/Home.module.css';


export default function Layout({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return  <>
            <header className={styles2.header}>
                <nav className={styles2.navbar}>
                    <Link href='/'>
                        <a className={styles2.navlogo}>[BrandLogo]</a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles2.navmenu : styles2.navmenu + ''+ styles2.active}>
                    <li className={styles2.navitem}>
                        <Link href='/'>
                            <a className={styles2.navlink}>Home</a>
                        </Link>
                    </li>
                     <li className={styles2.navitem}>
                        <Link href='/about'>
                            <a className={styles2.navlink}>About</a>
                        </Link>
                    </li>
                    <li className={styles2.navitem}>
                        <Link href='/contact'>
                            <a className={styles2.navlink}>Contact</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles2.hamburger : styles2.hamburger+''+styles2.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles2.bar}></span>
                    <span className={styles2.bar}></span>
                    <span className={styles2.bar}></span>
                </button>
                </nav>
        </header>
            {children}
        <div className={styles2.container}> 
            <footer className={styles2.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles2.logo} />
        </a>
      </footer>
      </div>
    </>
}