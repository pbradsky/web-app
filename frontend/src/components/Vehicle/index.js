import React from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';
import * as ROUTES from '../../constants/routes';

const DriveVehiclePage = ({ match }) => (
    <div>
        VID: {match.params.vid}
    </div>
);

const VehicleItem = ({ vehicle }) => (
    <div>
        <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
        <p>Vehicle ID: {vehicle.vid}</p>
        <Link to={ROUTES.DRIVE + `/${vehicle.vid}`}>
            Start Drive
        </Link>
    </div>
);

export default compose(
    withAuthorization(CONDITIONS.isSignedInUser),
    withFirebase
)(DriveVehiclePage);

export { VehicleItem };
