import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = ({ characters }) => {
  const [openCards, setOpenCards] = useState([]);

  const closeCard = (id) => {
    setOpenCards(openCards.filter((openId) => openId !== id));
  };

  const openCard = (id) => {
    if (!openCards.includes(id)) {
      setOpenCards([...openCards, id]);
    }
  };

  return (
    <div className={styles['card-container']}>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          isOpen={openCards.includes(character.id)}
          onClose={() => closeCard(character.id)}
          onOpen={() => openCard(character.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
