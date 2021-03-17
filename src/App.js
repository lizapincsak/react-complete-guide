import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Owl', age: 100},
      {name: 'Robin', age: 10},
      {name: 'Hawk', age: 1}    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        {name: 'OwlTrail', age: 100},
        {name: 'Robin', age: 10},
        {name: 'Hawk', age: 1000}    ]

    })

  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>Tgus us really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Flying</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'maindiv'}, React.createElement('h1', null, 'Does this work now??'))
  }
}

export default App;