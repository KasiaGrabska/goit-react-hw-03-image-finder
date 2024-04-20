import styles from '../styles/imageGalerryItem.module.css';
export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={styles.galleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="" className={styles.image} />
    </li>
  );
};
