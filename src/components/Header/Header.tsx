import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.text}>Rolando Rafael Castañon Fernández</p>
      <figure className={styles.figure}>
        <img
          className={styles.img}
          src="./profile_photo.png"
          alt="Profile Photo"
        />
      </figure>
    </header>
  );
}
