import React from 'react';

import { MdInfo } from 'react-icons/md';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const renderTooltip = children => props => (
  <Tooltip {...props} show={props.show.toString()}>
    {children}
  </Tooltip>
);

const FormInfoTooltip = ({ children }) => (
  <span className='float-right mr-1'>
    <OverlayTrigger
      placement='top'
      delay={250}
      overlay={renderTooltip(children)}
    >
      <MdInfo />
    </OverlayTrigger>
  </span>
);

export default FormInfoTooltip;