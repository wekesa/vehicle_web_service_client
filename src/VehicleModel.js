import React, {Component} from 'react';

class VehicleModel extends Component {
    render() {
        return (
            <tr>
                    <td>{this.props.vehicleModel.name}</td>
                    <td>{this.props.vehicleModel.price}</td>
                    <td>{this.props.vehicleModel.make_year}</td>
                    <td>{this.props.vehicleModel.description}</td>
            </tr>
        )

    }

}

export default VehicleModel
