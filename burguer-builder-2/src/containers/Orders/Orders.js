import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = (props) => {
  const [orderState, setOrderState] = useState({
    orders: []
  });

  const orderStateHandler = (orders) => {
    setOrderState({
      orders
    });
  };

  const [loadingState, setLoadingState] = useState({
    loading: true
  });

  const loadingStateHandler = (loading) => {
    setLoadingState({
      loading
    });
  };

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          response.data[key] = {
            ...response.data[key],
            id: key
          };
          fetchedOrders.push(response.data[key]);
        }
        orderStateHandler(fetchedOrders);
        loadingStateHandler(false);
      })
      .catch((err) => {
        loadingStateHandler(false);
      });
  }, []);

  const orders = [];
  if (orderState.orders) {
    orderState.orders.forEach((order) => {
      orders.push(
        <Order key={order.id} ingredients={order.ingredients} price={order.price}></Order>
      );
    });
  }

  return <div>{orders}</div>;
};

export default withErrorHandler(Orders, axios);
