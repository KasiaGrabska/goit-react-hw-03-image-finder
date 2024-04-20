import styles from '../styles/imageGallery.module.css';
import { ImageGalleryItem } from './ImageGalerryItem';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};
