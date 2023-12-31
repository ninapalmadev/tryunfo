import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="cardContainer">
        <h2
          value={ cardName }
          data-testid="name-card"
        >
          { cardName || 'Card Name' }
        </h2>
        <img
          value={ cardImage }
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">

          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">

          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">

          { cardAttr3 }
        </p>
        <p data-testid="rare-card">

          { cardRare }
        </p>
        { cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
