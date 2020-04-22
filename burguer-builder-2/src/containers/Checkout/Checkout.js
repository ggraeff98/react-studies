import React, { useState, useEffect } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

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

  useEffect(() => {
    console.log(props.location.search);
    const query = new URLSearchParams('?foo=1&bar=2');
    console.log(query);
  });

  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredientsState.ingredients}
        checkoutCancel={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      ></CheckoutSummary>
    </div>
  );
};

export default Checkout;
