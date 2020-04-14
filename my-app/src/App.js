import React from 'react';
import Layout from './components/Layout/Layout';
import styled from 'styled-components';
import BurguerBuilder from './containers/BuguerBuilder/BurguerBuilder';

const StyledAppDiv = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans';
`;

const app = () => {
  return (
    <StyledAppDiv>
      <Layout>
        <BurguerBuilder></BurguerBuilder>
      </Layout>
    </StyledAppDiv>
  );
};

export default app;
