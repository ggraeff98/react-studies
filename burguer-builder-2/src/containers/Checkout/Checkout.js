import React, { useState } from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

const Checkout = (props) => {
  const [ingredientsState, setIngreadientsState] = useState({
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  });

  return (
    <div>
      <CheckoutSummary ingredients={ingredientsState.ingredients}></CheckoutSummary>
    </div>
  );
};

export default Checkout;
