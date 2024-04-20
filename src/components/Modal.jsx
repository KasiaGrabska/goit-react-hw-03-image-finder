import styles from '../styles/modal.module.css';

export const Modal = ({ onClose, src, alt }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className={styles.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
