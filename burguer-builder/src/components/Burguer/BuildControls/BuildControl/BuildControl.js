import React from 'react';
import styled from 'styled-components';

const StyledBuildControlContainerlDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const StyledBuildControlLabelDiv = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const StyledBuildControlContainerlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  color: white;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  background-color: ${(props) => (props.buttonType === 'more' ? '#8F5E1E' : '#D39952')};

  &:active,
  :active:hover {
    background-color: ${(props) => (props.buttonType === 'more' ? '#99703F' : '#DAA972')};
  }
`;

const buildControl = (props) => {
  return (
    <StyledBuildControlContainerlDiv>
      <StyledBuildControlLabelDiv>{props.label}</StyledBuildControlLabelDiv>
      <StyledBuildControlContainerlButton
        buttonType={'less'}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </StyledBuildControlContainerlButton>
      <StyledBuildControlContainerlButton buttonType={'more'} onClick={props.added}>
        More
      </StyledBuildControlContainerlButton>
    </StyledBuildControlContainerlDiv>
  );
};

export default buildControl;
