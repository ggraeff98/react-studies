import React, { useState, useEffect } from 'react';

const asyncComponent = (Component) => {
  return (props) => {
    const [componentState, setComponentSate] = useState({
      component: null
    });

    const componentStateHandler = (component) => {
      setComponentSate({
        component: component
      });
    };

    useEffect(() => {
      Component().then((cmp) => {
        console.log(cmp);
        componentStateHandler(cmp.default);
      });
    }, []);

    return <>{componentState.component ? <Component {...props}></Component> : null}</>;
  };
};

export default asyncComponent;
