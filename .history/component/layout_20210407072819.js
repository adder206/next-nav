import styles from '../styles/Layout.module.css';

export default function Layout({children}) {
    return <> 
        <p className = {styles.bigtext}>This is our Layout</p>
           {children}
    </>
}