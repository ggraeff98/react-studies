import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const StyledSpan = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] });
  }

  const ingredientsList = ingredients.map((ingredient) => {
    return (
      <StyledSpan key={ingredient.name}>
        {ingredient.name} ({ingredient.amount})
      </StyledSpan>
    );
  });
  return (
    <StyledDiv>
      <p>Ingredients: {ingredientsList}</p>
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </StyledDiv>
  );
};

export default order;
