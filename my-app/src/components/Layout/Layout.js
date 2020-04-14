import React from 'react';
import Aux from '../../hoc/Aux';
import styled from 'styled-components';

const MainStyled = styled.main`
  margin-top: 16px;
`;

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <MainStyled>{props.children}</MainStyled>
    </Aux>
  );
};

export default layout;
