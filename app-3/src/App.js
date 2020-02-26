import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: '',

      characters: ['Jim', 'Pam', 'Dwight', 'Michael', 'Andy', 'Angela']
    }
  }

  handleChange(value){
    this.setState({input: value})
  }

  render(){
    let charToDisplay = this.state.characters
      .filter((element, indext) => {
        return element.toLowerCase().includes(this.state.input);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>}
      );

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {charToDisplay}
      </div>
    );
  }
}

export default App;
