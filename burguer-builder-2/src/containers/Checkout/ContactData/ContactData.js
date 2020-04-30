import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styled from 'styled-components';
import axios from '../../../axios-orders';

const StyledOne = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const StyledInput = styled.input`
  display: block;
`;

const ContactData = (props) => {
  const [contactDataState, setContactDataState] = useState({
    name: '',
    email: '',
    addres: {
      street: '',
      postalCode: ''
    }
  });

  const [spinnerState, setSpinnerState] = useState({
    isLoading: false
  });

  const spinnerHandler = (state) => {
    console.log('spinnerHandler');
    setSpinnerState({
      isLoading: state
    });
  };

  const orderHandler = (event) => {
    event.preventDefault();
    spinnerHandler(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
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
      .post('/orders.json', order)
      .then((response) => {
        console.log('then');
        spinnerHandler(false);
        props.history.replace('/');
      })
      .catch((error) => {
        console.log('catch');
        spinnerHandler(false);
      });
  };

  const form = (
    <form>
      <StyledInput type="text" name="name" placeholder="Your name"></StyledInput>
      <StyledInput type="text" name="mail" placeholder="Your email"></StyledInput>
      <StyledInput type="text" name="street" placeholder="Street"></StyledInput>
      <StyledInput type="text" name="postal" placeholder="Postal Code"></StyledInput>
      <Button buttonType="Success" clicked={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  return (
    <StyledOne>
      <h4>Enter your contact data</h4>
      {spinnerState.isLoading ? <Spinner></Spinner> : form}
    </StyledOne>
  );
};

export default ContactData;
