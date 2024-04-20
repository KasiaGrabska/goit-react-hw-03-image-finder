import styles from '../styles/imageGalerryItem.module.css';
export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={styles.galleryItem}>
      <img src={src} alt={alt} />
    </li>
  );
};
