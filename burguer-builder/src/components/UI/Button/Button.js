import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  color: ${(props) => (props.buttonType === 'Success' ? '#5C9210' : '#944317')};
`;

const button = (props) => {
  return (
    <ButtonStyled buttonType={props.buttonType} onClick={props.clicked}>
      {props.children}
    </ButtonStyled>
  );
};

export default button;
