import React from 'react';
import './Form.css';
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
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      checkIfHasTrunfo,
    } = this.props;

    const trunfo = checkIfHasTrunfo
      ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
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
      );

    return (
      <fieldset className="form">
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
          cols="20"
          rows="5"
          data-testid="description-input"
          required
        />
        <label htmlFor="cardAttr1">
          Attr01
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
          Attr02
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
          Attr03
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
          Imagem
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
        { trunfo }
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
}.isRequired;
