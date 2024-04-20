import axios from 'axios';
import { useState } from 'react';
import { Button } from './Button';
import { ImageGalleryItem } from './ImageGalerryItem';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const ApiKey = '42409060-380322e351fb08456a6a2d09f';

  const onSubmit = async query => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            onClick={() => openModal(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      {isLoading && <Loader />}
      {selectedImage && (
        <Modal src={selectedImage} alt="Selected Image" onClose={closeModal} />
      )}
      {images.length > 0 && !isLoading && <Button onClick={onSubmit} />}
    </div>
  );
};
