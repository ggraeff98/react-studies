import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const StyledSideDrawerDiv = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.4s ease-out;

  @media (min-width: 500px) {
    display: none;
  }

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
`;

const StyledLogoContainerDiv = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} onCloseModal={props.closed}></Backdrop>
      <StyledSideDrawerDiv show={props.show}>
        <StyledLogoContainerDiv>
          <Logo></Logo>
        </StyledLogoContainerDiv>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </StyledSideDrawerDiv>
    </Aux>
  );
};

export default sideDrawer;
