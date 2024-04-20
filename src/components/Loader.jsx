import styles from '../styles/loader.module.css';

export const Loader = () => {
  return (
    <Loader
      type="Oval"
      color="#00BFFF"
      height={80}
      width={80}
      className={styles.loader}
    />
  );
};
