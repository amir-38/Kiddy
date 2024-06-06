import React from "react";
import PropTypes from "prop-types";
import Styles from "./imgCard.module.scss";

const Card = ({ imageUrl, name, text }) => {
  return (
    <div className={Styles.card}>
      <img src={imageUrl} alt={name} className={Styles.cardImage} />
      <div className={Styles.cardContent}>
        <h2 className={Styles.cardName}>{name}</h2>
        <p className={Styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
