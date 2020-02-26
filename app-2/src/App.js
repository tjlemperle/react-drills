import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      foods: ['twinkies', 'watermelon', 'candy', 'soup']
    }
  }
  
  render(){
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return <div className='App'>{foodsToDisplay}</div>;
    
  }
}

export default App;
