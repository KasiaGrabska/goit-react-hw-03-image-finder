import styles from '../styles/modal.module.css';

export const Modal = ({ imageUrl, onClose }) => {
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};
