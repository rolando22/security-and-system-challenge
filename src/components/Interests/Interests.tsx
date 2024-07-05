import Section from '@/components/Section/Section';

import styles from './Interests.module.css';

export default function Interests() {
  return (
    <Section>
      <h2 className={styles.subtitle}>Intereses</h2>
      <ul>
        <li className={styles.text}>Hacer actividad física.</li>
        <li className={styles.text}>Crecer en mi profesión.</li>
        <li className={styles.text}>Crear soluciones mediante la programación.</li>
        <li className={styles.text}>Aprender más sobre Blockchain y Data Science</li>
      </ul>
    </Section>
  );
}
