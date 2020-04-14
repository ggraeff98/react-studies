import React from 'react';
import styled from 'styled-components';

const PersonDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: yellow;
`;

const person = (props) => {
  return (
    <PersonDiv onClick={props.click}>
      <p>
        I'm {props.name} and my age is {props.age}!
      </p>
      <p> {props.children} </p>
      <input
        type="text"
        defaultValue={props.name}
        onChange={props.changed}
      ></input>
    </PersonDiv>
  );
};

export default person;
