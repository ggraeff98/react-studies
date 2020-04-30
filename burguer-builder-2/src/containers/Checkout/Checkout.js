import React, { useState, useEffect } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
  // console.log(props);
  const [ingredientsState, setIngreadientsState] = useState({
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  });

  const [priceState, setPriceState] = useState({
    totalPrice: 0
  });

  const priceStateHandler = (price) => {
    setPriceState({
      totalPrice: price
    });
    console.log(price);
  };

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      param[0] === 'price'
        ? priceStateHandler(param[1])
        : (ingredients[param[0]] = +param[1]);
    }
    setIngreadientsState({
      ingredients
    });
  }, []);

  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    console.log('aaaa');
    props.history.replace('/checkout/contact-data');
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredientsState.ingredients}
        checkoutCancel={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      ></CheckoutSummary>
      <Route
        path={props.match.path + '/contact-data'}
        render={(props) => (
          <ContactData
            ingredients={ingredientsState.ingredients}
            price={priceState.totalPrice}
            {...props}
          ></ContactData>
        )}
      ></Route>
    </div>
  );
};

export default Checkout;
