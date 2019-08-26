import React, { Component } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as CONDITIONS from '../../constants/conditions';
import * as ROUTES from '../../constants/routes';

class DriveVehiclePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            vehicle: {}
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.vehicle(this.props.match.params.id)
            .once('value')
            .then(snapshot => {
                const vehicle = snapshot.val();

                this.setState({
                    loading: false,
                    vehicle: vehicle
                });
            });
    }

    handleLock = vid => {
        axios.post(process.env.REACT_APP_SERVER + '/control', {
                lock: true,
                id: vid
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    handleUnlock = vid => {
        axios.post(process.env.REACT_APP_SERVER + '/control', {
                lock: false,
                id: vid
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        const { loading, vehicle } = this.state;

        return (
            <div>
                <h1>Your Vehicle</h1>

                {loading && <div>Loading</div>}

                {Object.keys(vehicle).length !== 0 ?
                    <div>
                        <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
                        <p>Vehicle ID: {vehicle.id}</p>
                        <br />
                        <button onClick={() => this.handleLock(vehicle.id)}>Lock</button>
                        <button onClick={() => this.handleUnlock(vehicle.id)}>Unlock</button>
                    </div>
                : null}
            </div>
        );
    }
}

const VehicleItem = ({ vehicle }) => (
    <div>
        <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
        <p>Vehicle ID: {vehicle.id}</p>
        <Link to={ROUTES.DRIVE + `/${vehicle.id}`}>
            Start Drive
        </Link>
    </div>
);

export default compose(
    withAuthorization(CONDITIONS.isSignedInUser),
    withFirebase
)(DriveVehiclePage);

export { VehicleItem };
