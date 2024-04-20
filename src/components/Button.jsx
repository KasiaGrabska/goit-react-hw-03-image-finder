import styles from '../styles/button.module.css';
export const Button = ({ onClick, children }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
