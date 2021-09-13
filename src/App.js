
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerchForm from './component/SerchForm';
import Location from './component/Location';
import axios from 'axios';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameOfCity: "",
            lat: "",
            lon: "",
            zoom:0,
            showData: false,
            error:""
            
            
        };
    }


    handelInputLocation = (e) => {

        let nameOfCity = e.target.value;
        this.setState({
            nameOfCity: nameOfCity
        });
        console.log(this.state.nameOfCity);
    }

    handelSubmit = (e) => {
        e.preventDefault();

        let config = {
            method: "GET",
            baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.nameOfCity}`
        };

        
    

        console.log(config);

        axios(config).then(res => {
            let response = res.data[0];
            console.log(response);

           
                this.setState({
                    nameOfCity: response.display_name,
                    lat: response.lat,
                    lon: response.lon,
                    zoom:18,
                    showData: true
                    
                });

            
           
        });
    }



    render() {
        return (
            <div >
                <SerchForm handelInputLocation={this.handelInputLocation} handelSubmit={this.handelSubmit} />

                {
                    this.state.showData&&
                    
                    <Location  cityName ={this.state.nameOfCity} lat={this.state.lat} lon={this.state.lon} imgeUrl={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&size=100px250&zoom=${this.state.zoom}&markers=${this.state.lat},${this.state.lon}|icon:large-blue-cutout&format=png`}/>
                    
                        
                     
                }
                     
                     
                     


            </div>
        );
    }
}

export default App;
