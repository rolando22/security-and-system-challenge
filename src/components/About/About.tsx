import Section from '@/components/Section/Section';

import styles from './About.module.css';

export default function About() {

  return (
    <Section>
      <h2 className={styles.subtitle}>Sobre mí</h2>
      <p className={styles.text}>Desarrollador Web FullStack con JavaScript. Mi pasión por la programación me mantiene activo como autodidacta
        aprendiendo todas las áreas que implican el desarrollo de un proyecto. En el futuro no descarto formarme en áreas
        como Data Science o Blockchain.</p>
    </Section>
  );
}
