import React from 'react';
import burguerLogo from '../../assets/images/burguer-logo.png';
import styled from 'styled-components';

const StyledLogoDiv = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const StyledLogoImg = styled.img`
  height: 100%;
`;

const logo = (props) => {
  return (
    <StyledLogoDiv>
      <StyledLogoImg src={burguerLogo} alt="MyBurguer" />
    </StyledLogoDiv>
  );
};

export default logo;
