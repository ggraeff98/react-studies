import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const StyledToolbarHeader = styled.header`
  height: 56px;
  padding: 0 16px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #702b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 90;
`;

const StyledToolbarNav = styled.nav`
  height: 100%;
  @media (max-width: 499px) {
    display: none;
  }
`;

const toolBar = (props) => {
  return (
    <StyledToolbarHeader>
      <DrawerToggle clicked={props.clicked}></DrawerToggle>
      <Logo></Logo>
      <StyledToolbarNav>
        <NavigationItems></NavigationItems>
      </StyledToolbarNav>
    </StyledToolbarHeader>
  );
};

export default toolBar;
