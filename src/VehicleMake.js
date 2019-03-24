import React, {Component} from 'react';
import axios from "axios";
import VehicleModel from './VehicleModel';

class VehicleMake extends Component {
    state = {
        vehicleModels: []
    };

    componentDidMount() {
        let web_service_url = "http://localhost:9001/vehicles/api/v1.0/get_vehicle_models/" + this.props.vehicleMake.id ;
        axios
            .get(web_service_url, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: false,
                credentials: 'same-origin',
            })
            .then(response => {
                // create an array of vehicle makes only with relevant data
                const newVehicleModels = response.data.models.map(c => {
                    return {
                        id: c.id,
                        name: c.name,
                        description: c.description,
                        make_year: c.year,
                        price: c.price,


                    };
                });
                console.log(newVehicleModels)

                // create a new "State" object without mutating
                // the original State object.
                const newState = Object.assign({}, this.state, {
                    vehicleModels: newVehicleModels
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="api_data">
                <h4>Vehicle Make Category: {this.props.vehicleMake.make}</h4>
                {/*<p>{this.props.vehicleMake.description}</p>*/}
                <table className="table-vehicle">
                    <tr>
                        <th>Model Name</th>
                        <th>Vehicle Price</th>
                        <th>Vehicle Year</th>
                        <th>Description</th>
                    </tr>
                {this.state.vehicleModels.map((vehicle, index) => <VehicleModel key={index} vehicleModel={vehicle}/>)}
                </table>
                <div>
                    <br/>
                </div>
            </div>
        )

    }

}

export default VehicleMake