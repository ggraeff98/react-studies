import React from 'react';
import styled from 'styled-components';
import BurgueIngredient from './BurguerIngredient/BurguerIngredient';
import { withRouter } from 'react-router-dom';

const BurguerStyledDiv = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

const burguer = (props) => {
  // const fullBurguer = Object.keys(props.ingredients).map(
  //   (ingredientKey) => {
  //     return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
  //       return (
  //         <BurgueIngredient
  //           type={ingredientKey}
  //           key={ingredientKey + i}
  //         ></BurgueIngredient>
  //       );
  //     });
  //   }
  // );

  const ingredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return props.ingredients[ingredientKey] > 0
        ? {
            type: ingredientKey,
            amount: props.ingredients[ingredientKey]
          }
        : null;
    })
    .filter((ingredient) => ingredient && ingredient.amount);

  const fullBurguer = [];

  const setFullBurguer = () => {
    ingredients.forEach((ingredient) => {
      if (!ingredient) return;
      for (let i = 0; i < ingredient.amount; i++) {
        fullBurguer.push(
          <BurgueIngredient
            type={ingredient.type}
            key={ingredient.type + i}
          ></BurgueIngredient>
        );
      }
    });
  };

  ingredients.length
    ? setFullBurguer()
    : fullBurguer.push(<p key="default">Please start adding ingredients!</p>);

  return (
    <BurguerStyledDiv>
      <BurgueIngredient type="bread-top"></BurgueIngredient>
      {fullBurguer}
      <BurgueIngredient type="bread-bottom"></BurgueIngredient>
    </BurguerStyledDiv>
  );
};

export default withRouter(burguer);
