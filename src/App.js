import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    state = {
      persons: [
        {id: '1', name: 'Owl', age: 100},
        {id: '2', name: 'Robin', age: 10},
        {id: '3', name: 'Hawk', age: 1}    ],
      otherState: 'some other value',
      showPersons: false
    }
  

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({
    persons: persons
  })
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1)
  this.setState({persons: persons})
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render(){
  const style= {
    backgroundColor: 'pink',
    color: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'yellow',
      color: 'brown'
    }
  }

  let persons = null;
  if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      </div> 
    )
    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'blue',
      color: 'orange'
    }
  }

  const classes = [];
  if(this.state.persons.length <= 2){
    classes.push('red');//classes = ['red']
  } if(this.state.persons.length <= 1){
    classes.push('bold'); //classes = ['red', 'bold']
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className="button"
      onClick={this.togglePersonHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
}
    
    // return React.createElement('div', {className: 'maindiv'}, React.createElement('h1', null, 'Does this work now??'))
}

export default App;

// state = {
//   persons: [
//     {name: 'Owl', age: 100},
//     {name: 'Robin', age: 10},
//     {name: 'Hawk', age: 1}    ]
// }

// switchNameHandler = () => {
//   //console.log('Was clicked')
//   this.setState({
//     persons: [
//       {name: 'OwlTrail', age: 100},
//       {name: 'Robin', age: 10},
//       {name: 'Hawk', age: 1000}    ]

//   })

// }