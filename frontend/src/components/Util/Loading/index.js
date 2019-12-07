import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ loading }) => (
  loading &&
    <Spinner
      animation='border'
      role='status'
      style={{display: 'block', margin: 'auto'}}>
        <span className='sr-only'>Loading...</span>
    </Spinner>
);

export default Loading;