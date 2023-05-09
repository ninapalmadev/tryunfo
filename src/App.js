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
    // hasTrunfo: false,
    // isSaveButtonDisabled: true,
    // onInputChange: '',
    // onSaveButtonClick: '',
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="grid">
        <div className="left">
          <h1>Tryunfo</h1>
          <Form
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
        </div>
        <div className="right">
          <Card
            { ...this.state }
          />
        </div>
      </div>
    );
  }
}

export default App;
