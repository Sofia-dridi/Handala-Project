// components/Header.js

import Link from 'next/link';
import styles from '../styles/app.module.css'
const Header = () => (
  <nav className={styles.navi}>
    
    <ul className={styles.navlinks}>
      <li className={styles.navlogo}>Handala</li>
      <li className={styles.link}><Link href="/">Home</Link></li>
      <li className={styles.link}><Link href="/about">About Us</Link></li>
      <li className={styles.link}><Link href="/contact">Contact</Link></li>
      <li className={styles.link}> <Link href="#"><button className={styles.btn}>Register Now</button></Link></li>
    </ul>
   
  </nav>
);

export default Header;
