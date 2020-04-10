import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div onClick={props.click} className="Person">
      <p>
        I'm {props.name} and my age is {props.age}!
      </p>
      <p> {props.children} </p>
      <input
        type="text"
        defaultValue={props.name}
        onChange={props.changed}
      ></input>
    </div>
  );
};

export default person;
