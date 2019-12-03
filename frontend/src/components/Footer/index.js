import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (
    <Navbar bg='white' className='border-top mt-5'>
        <Navbar.Text className='m-auto' style={{fontSize: '10px'}}> {'\u00a9'} 2019 Jurne Inc. All Rights Reserved</Navbar.Text>
    </Navbar>
);

export default Footer;