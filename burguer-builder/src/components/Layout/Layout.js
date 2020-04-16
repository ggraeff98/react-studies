import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const MainStyled = styled.main`
  margin-top: 72px;
`;

const Layout = (props) => {
  const [sideDrawerState, setSideDrawerState] = useState({
    showSideDrawer: false
  });

  const sideDrawerClosedHandler = () => {
    setSideDrawerState({
      showSideDrawer: !sideDrawerState.showSideDrawer
    });
  };

  return (
    <Aux>
      <Toolbar clicked={sideDrawerClosedHandler}></Toolbar>
      <SideDrawer
        closed={sideDrawerClosedHandler}
        show={sideDrawerState.showSideDrawer}
      ></SideDrawer>
      <MainStyled>{props.children}</MainStyled>
    </Aux>
  );
};

export default Layout;
