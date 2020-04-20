import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
    purchasable: false,
    purchasing: false
  });

  const updatePurchaseState = (ingredients, totalPrice) => {
    const ingredientsAmount = Object.values(ingredients).reduce((sum, el) => {
      return (sum += el);
    }, 0);

    setIngridientsState({
      ...ingredientsState,
      ingredients,
      totalPrice,
      purchasable: ingredientsAmount > 0
    });
  };

  const [spinnerState, setSpinnerState] = useState({
    isLoading: false
  });

  const spinnerHandler = (isLoading) => {
    setSpinnerState({
      isLoading
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

  const purchaseHandler = () => {
    console.log('purchaseHandler');
    setIngridientsState({
      ...ingredientsState,
      purchasing: !ingredientsState.purchasing
    });
  };

  const purchaseCancel = () => {
    console.log('aaaaaaa');
    purchaseHandler();
  };

  const purchaseContinue = () => {
    spinnerHandler(true);
    const order = {
      ingredients: ingredientsState.ingredients,
      price: ingredientsState.totalPrice.toFixed(2),
      customer: {
        name: 'Gustavo Graeff',
        address: {
          steert: 'Teststreet 111',
          zipCode: '123456789',
          country: 'Brazil'
        },
        email: 'gustavo@mail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.jsonnn', order)
      .then((response) => {
        spinnerHandler(false);
        purchaseHandler();
        console.log(response);
      })
      .catch((error) => {
        spinnerHandler(false);
        purchaseHandler();
        console.log(error);
      });
  };

  const disabledInfo = {
    ...ingredientsState.ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const ordersToShow = spinnerState.isLoading ? (
    <Spinner></Spinner>
  ) : (
    <OrderSummary
      ingredients={ingredientsState.ingredients}
      successClicked={purchaseContinue}
      dangerClicked={purchaseCancel}
      price={ingredientsState.totalPrice}
    ></OrderSummary>
  );

  return (
    <Aux>
      <Modal show={ingredientsState.purchasing} closeModal={purchaseHandler}>
        {/* <OrderSummary
          ingredients={ingredientsState.ingredients}
          successClicked={purchaseContinue}
          dangerClicked={purchaseCancel}
          price={ingredientsState.totalPrice}
        ></OrderSummary> */}
        {ordersToShow}
      </Modal>
      <Burguer ingredients={ingredientsState.ingredients}></Burguer>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={ingredientsState.totalPrice}
        purschasable={ingredientsState.purchasable}
        purschasing={purchaseHandler}
      ></BuildControls>
    </Aux>
  );
};

export default WithErrorHandler(BurguerBuilder, axios);
