import React from 'react';

import Form from 'react-bootstrap/Form';

const Search = ({ searchQuery, onChange }) => (
  <Form.Control
    type='text'
    placeholder='Search'
    name='searchQuery'
    value={searchQuery}
    onChange={onChange}
  />
);

export default Search;