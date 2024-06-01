// components/OurGoal.js
import Link from 'next/link';
import styles from '../styles/app.module.css';
const OurGoal = () => (
    <section className={styles.ourgoal}>
      <div className={styles.left}>
        <h1>Achieve Your Therapy Goals with Expert Guidance</h1>
        <p>Join our network of skilled practitioners to offer your expertise and provide top-notch care to patients in need. By registering, you can expand your reach and impact lives through seamless and secure online consultations.</p>
      </div>
      <div className={styles.right}>
        <p>Our medical services are tailored to meet your individual needs and goals. Whether you require a consultation, ongoing therapy, or specialist care, our dedicated medical professionals are here to support you every step of the way.</p>
      </div>
    </section>
  );
  
  export default OurGoal;
  