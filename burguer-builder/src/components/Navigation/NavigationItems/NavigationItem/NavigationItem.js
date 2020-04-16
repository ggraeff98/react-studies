import React from 'react';
import styled from 'styled-components';

const StyledItemsListLi = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

const StyledItemsLIstA = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  color: ${(props) => (props.active ? '#40A4C8' : null)};

  @media (min-width: 500px) {
    color: white;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }

    background-color: ${(props) => (props.active ? '#8f5c2c' : null)};
    border-bottom: ${(props) => (props.active ? '4px solid #40a4c8' : null)};
    color: ${(props) => (props.active ? 'white' : null)};
  }
`;

const navigationItem = (props) => {
  return (
    <StyledItemsListLi>
      <StyledItemsLIstA href={props.link} active={props.active}>
        {props.children}
      </StyledItemsLIstA>
    </StyledItemsListLi>
  );
};

export default navigationItem;
