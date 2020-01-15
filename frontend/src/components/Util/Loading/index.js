import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ loading }) => (
  loading
    ? <Spinner
        animation='border'
        role='status'
        variant='primary'
        style={{display: 'block', margin: 'auto'}}>
          <span className='sr-only'>Loading...</span>
      </Spinner>
    : null
);

const AppLoading = () => (
  <Spinner
    animation='border'
    role='status'
    variant='primary'
    size='lg'
    style={{display: 'block', margin: 'auto', marginTop: '33vh'}}>
      <span className='sr-only'>Loading...</span>
  </Spinner>
);

const PageLoading = AppLoading;

const BlankLoading = () => <></>;

const WithPageLoad = ({ loading, children }) => (
  loading
    ? <PageLoading />
    : <>{children}</>
);

export { AppLoading, PageLoading, WithPageLoad, BlankLoading };
export default Loading;