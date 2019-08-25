import React from 'react';

const VehicleItem = ({ vehicle }) => (
    <div>
        <h2>{vehicle.year} {vehicle.make} {vehicle.model}</h2>
        <p>Vehicle ID: {vehicle.vid}</p>
    </div>
);

export default VehicleItem;
