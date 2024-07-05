import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Interests from '@/components/Interests/Interests';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Interests />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
