import React, {Component} from 'react';
import axios from "axios";
import VehicleMake from './VehicleMake'

import './App.css';

class App extends Component {
    state = {
        vehicles: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:9001/vehicles/api/v1.0/makes/", {
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
                const newVehicleMakes = response.data.makes.map(c => {
                    return {
                        id: c.id,
                        make: c.name,
                        description: c.description
                    };
                });
                console.log(newVehicleMakes)

                // create a new "State" object without mutating
                // the original State object.
                const newState = Object.assign({}, this.state, {
                    vehicles: newVehicleMakes
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Vehicle Web service Client</p>
                </header>
                 {this.state.vehicles.map((vehicle, index) => <VehicleMake key={index} vehicleMake={vehicle}/>)}

            </div>
        );
    }
}

export default App;
