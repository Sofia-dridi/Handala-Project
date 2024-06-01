
import styles from "../styles/app.module.css";

// components/ServiceBox.js

const ServiceBox = ({ title, description }) => (
    <div className={styles.box}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
  
  export default ServiceBox;
  