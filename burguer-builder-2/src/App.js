import React from 'react';
import Layout from './components/Layout/Layout';
import styled from 'styled-components';
import BurguerBuilder from './containers/BuguerBuilder/BurguerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

const StyledAppDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans';
`;

const app = () => {
  return (
    <StyledAppDiv>
      <Layout>
        {/* <BurguerBuilder></BurguerBuilder> */}
        {/* <Checkout></Checkout> */}
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/" component={BurguerBuilder}></Route>
        </Switch>
      </Layout>
    </StyledAppDiv>
  );
};

export default app;
