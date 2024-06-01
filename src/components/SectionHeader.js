// components/SectionHeader.js

import styles from "../styles/app.module.css"
import Link from "next/link";
const SectionHeader = ({ title, subtitle }) => (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1><span>{title}</span></h1>
        <p>{subtitle}</p>
        <Link className="linkk" href="http://127.0.0.1:5500/nearinfo.html"><button className={styles.bt}>More Info</button></Link>
      </div>
      <div className={styles.image}>
        <span className={styles.imagebg}></span>
        <img src="/image.png" />
      </div>
      
    </div>
  );
  
  export default SectionHeader;
  