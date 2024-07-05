'use client';

import { useEffect, useState } from 'react';

import Section from '@/components/Section/Section';
import Notification from '@/components/Notification/Notification';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => { 
    if (!showNotification) return;
    const setTimeountId = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(setTimeountId);
  }, [showNotification]);

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const text = formData.get('text') as string;
    console.log({ name, email, text });
    setShowNotification(true);
    form.reset();
  };

  return (
    <>
      <Section>
        <h2 className={styles.subtitle}>Contactamé</h2>
        <form onSubmit={handlerOnSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <label 
              className={styles.text} 
              htmlFor='name'
            >
              Nombre
            </label>
            <input
              className={styles.input}
              type='text'
              name='name'
              id='name'
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label 
              className={styles.text} 
              htmlFor='email'
            >
              Email
            </label>
            <input
              className={styles.input}
              type='email'
              name='email'
              id='email'
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label
              className={styles.text}
              htmlFor='text'
            >
              Mensaje
            </label>
            <textarea
              className={styles.input}
              name='text'
              id='text'
              rows={5}
              required
            ></textarea>
          </div>
          <button
            className={styles.button}
            type='submit'
          >
            Enviar
          </button>
        </form>
      </Section>

      {showNotification && <Notification />}
    </>
  );
}
