import styles from '../styles/imageGallery.module.css';
export const ImageGallery = ({ children }) => {
  return (
    <>
      <ul className={styles.gallery}>{children}</ul>
    </>
  );
};
