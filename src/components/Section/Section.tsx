'use client';

import { useEffect, useRef } from 'react';
import styles from './Section.module.css';

export default function Section({ children }: { children: React.ReactNode }) {
  const node = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('class', `${styles.section} ${styles.effect}`);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={node} className={styles.section}>
      {children}
    </section>
  );
}
