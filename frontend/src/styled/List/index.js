import React from 'react';

const SubItem = ({ prefix, children }) => (
  <li className='mb-2 mt-2'>
    <p className='float-left'>{prefix}</p>
    <p className='ml-5'>
      {children}
    </p>
  </li>
);

export default SubItem;