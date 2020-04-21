import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [errorState, setErrorState] = useState({
      error: null
    });

    const errorHandler = (errorMessage) => {
      setErrorState({
        error: errorMessage
      });
    };

    useEffect(() => {
      const reqInterceptor = axios.interceptors.request.use((req) => {
        errorHandler(null);
        return req;
      });
      const resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          errorHandler(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, []);

    return (
      <Aux>
        <Modal show={errorState.error} closeModal={() => errorHandler(null)}>
          {errorState.error ? errorState.error.message : null}
        </Modal>
        <WrappedComponent {...props}></WrappedComponent>
      </Aux>
    );
  };
};

export default withErrorHandler;
