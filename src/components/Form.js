import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name card"
          data-testid="name-input"
          required
        />
        <label htmlFor="description">
          Descrição
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="card description "
          cols="30"
          rows="10"
          data-testid="description-input"
          required
        />
        <label htmlFor="attr1">
          <input
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
            required
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
            required
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
            required
          />
        </label>
        <label htmlFor="image">
          <input
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            required
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="rare"
            id="rare"
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
            type="checkbox"
            name="trunfoCheck"
            id="trunfoCheck"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="submite"
          data-testid="save-button"
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}
