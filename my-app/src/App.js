import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Gustavo', age: 21 },
      { name: 'Laura', age: 18 }
    ]
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Laura', age: 18 }
      ]
    });
  };

  const nameChangeHandler = (event) => {
    switchNameHandler(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={switchNameHandler.bind(this, 'Gustavooooo')}>
        Switch Person
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, 'Gustavo')}
        changed={nameChangeHandler}
      >
        Eitcha
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      ></Person>
    </div>
  );
};

export default App;
