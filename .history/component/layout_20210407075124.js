import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
    return <> 

            <header className={styles.header}>
                    <nav className={styles.navbar>
                        <a className={styles.navlogo>[BrandLogo]</a>
                    <ul className={styles.navmenu}>
                        <li class="navitem">
                            <a class="navlink">Home</a>
                        </li>
                        <li class="navitem">
                        
                            <a class="navlink">About</a>
                
                        </li>
                        <li class="navitem">
                    
                            <a class="navlink">Contact</a>
                
                        </li>
                    </ul>
                    <button class='hamburger'>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    </nav>
                </header>
                    {children}
                    {/* {footer} */}
                        </>
            }