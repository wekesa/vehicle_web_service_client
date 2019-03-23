import React, {Component} from 'react';

class VehicleModel extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column">{this.props.vehicleModel.name}</div>
                    <div className="column">{this.props.vehicleModel.price}</div>
                    <div className="column">{this.props.vehicleModel.make_year}</div>
                    <div className="column">{this.props.vehicleModel.description}</div>
                </div>
            </div>
        )

    }

}

export default VehicleModel
