import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledAppDiv = styled.div`
  background-color: ${(props) => (props.altStyle ? 'yellow' : 'green')};
`;

const App = (props) => {
  const [peopleState, setpeopleState] = useState({
    people: [
      { name: 'Gustavo', age: 21 },
      { name: 'Laura', age: 18 }
    ]
  });

  const switchNameHandler = (event, index) => {
    const people = peopleState.people;
    people[index].name = event;
    setpeopleState({
      people
    });
  };

  const nameChangeHandler = (event, index) => {
    switchNameHandler(event.target.value, index);
  };

  const [showPeopleState, setShowPeopleState] = useState({
    showPeople: false
  });

  const toggleShowPeopleHandler = (show) => {
    setShowPeopleState({
      showPeople: show
    });
  };

  let persons = null;

  if (showPeopleState.showPeople) {
    persons = (
      <div>
        {peopleState.people.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(e) => nameChangeHandler(e, index)}
              key={index}
            ></Person>
          );
        })}
      </div>
    );
  }

  return (
    <StyledAppDiv altStyle={showPeopleState.showPeople}>
      <div>{peopleState.showPeople}</div>
      <h1>Hello World</h1>
      <button onClick={toggleShowPeopleHandler.bind(this, !showPeopleState.showPeople)}>
        Show People
      </button>
      {persons}
    </StyledAppDiv>
  );
};

export default App;
