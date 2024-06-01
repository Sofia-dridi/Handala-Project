import Header from '../components/Header'
import SectionHeader from '../components/SectionHeader';
import ServiceBox from '../components/ServiceBox';
import OurGoal from '../components/OurGoal';
import styles from '../styles/app.module.css';
const IndexPage = () => (
  <div className={styles.container}>
    <Header />
    <SectionHeader 
      title="Get Quick Medical Services"
      subtitle="In today's fast-paced world, accessing prompt and efficient medical services is essential. Whether you're seeking routine check-ups or immediate medical attention, our platform ensures that you can connect with qualified doctors quickly and securely. By leveraging blockchain technology, we provide a seamless, transparent, and secure way to manage your healthcare needs."
    />
    <section className={styles.services}>
      
      <h1 className={styles.title}>MEDICAL SERVICES</h1>
      <p className={styles.subtitle}>Our Center offer you and your familly the complete range of healthcare services.</p>
      <div className={styles.listservices}>
        <ServiceBox 
          title="Family Care" 
          description="From walk-in care and same-day appointments to online visits, we provide comprehensive family care to ensure the well-being of you and your loved ones. For any urgent medical needs, we’re here to help." 
        />
         <ServiceBox 
          title="URGENT CARE" 
          description="Our urgent care services offer immediate medical attention for non-life-threatening conditions.
          With options for both walk-in and online consultations, we ensure timely care when you need it most." 
        />
         <ServiceBox 
          title="Spectialist care" 
          description="Access specialized medical care from experts in various fields. Whether you need a consultation or a 
          follow-up, our specialists are available for both in-person and online visits to address your specific health concerns." 
        />
        <ServiceBox 
          title="PEDIATRIC" 
          description="Our pediatric care services cater to the unique needs of children, offering everything from routine check-ups to urgent
          medical attention. We provide compassionate and comprehensive care for your little ones" 
        />
        <ServiceBox 
          title="DENTIST" 
          description="Get professional dental care with our range of services, including preventive, restorative, and emergency dental treatments.
          Schedule a visit or consult online to maintain your oral health." 
        />
        <ServiceBox 
          title="familly care" 
          description="From walk-in care and same-day appointments to online visits, we provide comprehensive family care to ensure the well-being 
          of you and your loved ones. For any urgent medical needs, we’re here to help" 
        />
        {/* Repeat ServiceBox component for other services */}
      </div>
    </section>
    <OurGoal />
  </div>
);

export default IndexPage;