import React from 'react';
import styles from './Card.module.css';

const Card = ({ name, status, species, gender, origin, image, isOpen, onClose, onOpen }) => {
  return (
    <div className={styles.container} onClick={onOpen}>
      <div className={styles.containerCard}>
        <div className={styles.front}>
          <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.back}>
          <button className={styles.btc} onClick={onClose}>
            X
          </button>
          <h3>{name}</h3>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Origin:</strong> {origin.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
