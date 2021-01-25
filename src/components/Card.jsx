import React from 'react';
import classname from 'classnames';
import '../assets/components/Card.css';

const Card = ({ character }) => {
  const { name, status, species, image, location, origin } = character;
  const statusClass = classname(
    'status__icon',
    status === 'Alive' && 'status__icon--alive',
    status === 'Dead' && 'status__icon--dead',
    status === 'unknown' && 'status__icon--unknown',
    )

  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="imagen pesonaje" />
      </div>
      <div className="card__content">
        <div className="card__section">
          <h2 className="card__name">{name}</h2>
          <span className="card__status">
            <span className={statusClass} />
          {`${status} - ${species}`}
        </span>
        </div>
        <div className="card__section">
          <span className="card__label card__label--title">Ultima locación conocida</span>
          <span className="card__label card__label--value">{location.name}</span>
        </div>
        <div className="card__section">
          <span className="card__label card__label--title">Origen</span>
          <span className="card__label card__label--value">{origin.name || '-'}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
