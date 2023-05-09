import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <label htmlFor="cardName">
          Nome
        </label>
        <input
          value={ cardName }
          onChange={ onInputChange }
          type="text"
          name="cardName"
          id="cardName"
          placeholder="Name card"
          data-testid="name-input"
          required
        />
        <label htmlFor="cardDescription">
          Descrição
        </label>
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
          id="cardDescription"
          placeholder="card description "
          cols="30"
          rows="10"
          data-testid="description-input"
          required
        />
        <label htmlFor="cardAttr1">
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            data-testid="attr1-input"
            required
          />
        </label>
        <label htmlFor="cardAttr2">
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            data-testid="attr2-input"
            required
          />
        </label>
        <label htmlFor="cardAttr3">
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="attr3-input"
            required
          />
        </label>
        <label htmlFor="cardImage">
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
            required
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoCheck">
          Super Trybe Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            name="trunfoCheck"
            id="trunfoCheck"
            data-testid="trunfo-input"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onChange={ onInputChange }
          onClick={ onSaveButtonClick }
          type="submite"
          data-testid="save-button"
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
