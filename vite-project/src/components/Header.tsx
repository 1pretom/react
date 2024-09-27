import styles from "./Header.module.css";
import babaLogo from '../assets/baba-logo.png'

export function Header () {
  return (
    <header className={styles.header}>
        <img src={babaLogo} alt="logo baba europeu" />
      <strong>Europeu Feed</strong>
    </header>
  );
};
