import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurguerBuilder = () => {
  const [ingredientsState, setIngridientsState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  });

  const updatePurchaseState = (ingredients, totalPrice) => {
    const ingredientsAmount = Object.values(ingredients).reduce((sum, el) => {
      return (sum += el);
    }, 0);

    setIngridientsState({
      ingredients,
      totalPrice,
      purchasable: ingredientsAmount > 0
    });
  };

  const addIngredientHandler = (type) => {
    const oldIngredientAmount = ingredientsState.ingredients[type];
    const newIngredientAmount = oldIngredientAmount + 1;
    const ingredients = {
      ...ingredientsState.ingredients
    };
    ingredients[type] = newIngredientAmount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = ingredientsState.totalPrice;
    const totalPrice = oldPrice + priceAddition;
    setIngridientsState({
      ...ingredientsState,
      ingredients,
      totalPrice
    });
    updatePurchaseState(ingredients, totalPrice);
  };

  const removeIngredientHandler = (type) => {
    const oldIngredientAmount = ingredientsState.ingredients[type];
    if (oldIngredientAmount === 0) return;

    const newIngredientAmount = oldIngredientAmount - 1;
    const ingredients = {
      ...ingredientsState.ingredients
    };
    ingredients[type] = newIngredientAmount;

    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = ingredientsState.totalPrice;
    const totalPrice = oldPrice - priceAddition;
    setIngridientsState({
      ...ingredientsState,
      ingredients,
      totalPrice
    });
    updatePurchaseState(ingredients, totalPrice);
  };

  const disabledInfo = {
    ...ingredientsState.ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <Aux>
      <Burguer ingredients={ingredientsState.ingredients}></Burguer>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={ingredientsState.totalPrice}
        puschasable={ingredientsState.purchasable}
      ></BuildControls>
    </Aux>
  );
};

export default BurguerBuilder;
