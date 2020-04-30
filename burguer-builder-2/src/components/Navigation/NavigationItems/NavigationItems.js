import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';

const StyledItemsLIstUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

const navigationItems = () => {
  return (
    <StyledItemsLIstUl>
      <NavigationItem link="/" exact>
        Burguer Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </StyledItemsLIstUl>
  );
};

export default navigationItems;
