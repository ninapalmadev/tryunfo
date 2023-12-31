import './App.css';
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: true,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  onInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    const valueField = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: valueField,
    }, () => this.validateSaveButton());
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const cardInfo = { ...this.state };
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: [...prev.savedCards, cardInfo],
    }));
  };

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const min = 0;
    const max = 90;
    const total = 210;

    const attack = Number(cardAttr1);
    const attack2 = Number(cardAttr2);
    const attack3 = Number(cardAttr3);

    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || attack > max
    || attack < min
    || attack2 > max
    || attack2 < min
    || attack3 > max
    || attack3 < min
    || (attack + attack2 + attack3) > total) {
      this.setState(() => ({
        isSaveButtonDisabled: true,
      }));
    } else {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    }
  };

  checkIfHasTrunfo = () => {
    const { savedCards } = this.state;
    return savedCards.some((item) => item.cardTrunfo);
  };

  render() {
    const { savedCards } = this.state;
    return (
      <>
        <div className="grid">
          <div className="left">
            <h1>Tryunfo</h1>
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              { ...this.state }
              checkIfHasTrunfo={ this.checkIfHasTrunfo() }
            />
          </div>
          <div className="right">
            <Card
              { ...this.state }
            />
          </div>
        </div>
        <div>
          {
            savedCards.map((card) => (
              <div key={ card.cardName }>
                <Card
                  { ...card }
                />
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
