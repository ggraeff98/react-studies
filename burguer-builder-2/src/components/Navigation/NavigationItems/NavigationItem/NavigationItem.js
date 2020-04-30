import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const StyledItemsLIstA = styled(NavLink)`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  color: #40a4c8;

  @media (min-width: 500px) {
    color: white;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }

    &.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;

const navigationItem = (props) => {
  return (
    <StyledItemsListLi>
      <StyledItemsLIstA to={props.link} exact={props.exact}>
        {props.children}
      </StyledItemsLIstA>
    </StyledItemsListLi>
  );
};

export default navigationItem;
