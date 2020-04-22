import React from 'react';
import Burguer from '../Burguer/Burguer';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

const StyledDivContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const StyledBurguerDivContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const checkoutSummary = (props) => {
  return (
    <StyledDivContainer>
      <h1>We hope it tastes well!</h1>
      <StyledBurguerDivContainer>
        <Burguer ingredients={props.ingredients}></Burguer>
      </StyledBurguerDivContainer>
      <Button buttonType={'Danger'}>CANCEL</Button>
      <Button buttonType={'Success'}>CONTINUE</Button>
    </StyledDivContainer>
  );
};

export default checkoutSummary;
