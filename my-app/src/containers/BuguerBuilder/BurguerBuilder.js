import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';

const BurguerBuilder = () => {
  const [ingredientsState, setIngridientsState] = useState({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  });

  const switchBurguerIngredients = (ingredient, amount) => {
    const ingredients = ingredientsState.ingredients;
    ingredients[`${ingredient}`] = amount;

    setIngridientsState({
      ingredients
    });
  };

  return (
    <Aux>
      <Burguer ingredients={ingredientsState.ingredients}></Burguer>
      <div onClick={() => switchBurguerIngredients('salad', 0)}>Build Controls</div>
    </Aux>
  );
};

export default BurguerBuilder;
