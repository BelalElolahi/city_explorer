
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerchForm from './component/SerchForm';
import Location from './component/Location';
import axios from 'axios';
import Map1 from './component/Map1';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameOfCity: "",
            lat: "",
            lon: "",
            zoom: 0,
            showData: false,
            alertShow: false,
            errorMessage: "",
            weatherData: []


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
            let resposed = res.data[0];
            this.setState({
                nameOfCity: resposed.display_name,
                lat: resposed.lat,
                lon: resposed.lon,
                zoom: 18,
                showData: true

            });
        }).then(() => {

            axios.get(`http://localhost:8000/weather_data?lat=${this.state.lat}&lon=${this.state.lon}`).then(res => {
                console.log(res.data);

                this.setState({
                    weatherData: res.data
                });
                console.log(this.state.weatherData);


            }).catch(error => {
                console.error(error);
                this.setState({
                    errorMessage: error,
                    alertShow: true
                });
            });
        }
        ).catch(error => {
            console.error(error);
            this.setState({
                errorMessage: error,
                alertShow: true


            });

        }

        );

    }



    render() {
        return (
            <div >
                <SerchForm handelInputLocation={this.handelInputLocation} handelSubmit={this.handelSubmit} />

                {
                    this.state.showData &&
                    <>

                        <Location
                            cityName={this.state.nameOfCity}
                            lat={this.state.lat}
                            lon={this.state.lon}
                            imgeUrl={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&size=100px250&zoom=${this.state.zoom}&markers=${this.state.lat},${this.state.lon}|icon:large-blue-cutout&format=png`}
                            

                        />
                        {
                           
                            this.state.weatherData.forEach(item =>{
                                  <><h1>{item.day}</h1><h1>{item.deccription}</h1></>;
                            })
                        }

                    </>
                }
                

                {
                    this.state.alertShow && <Map1 errormessage={this.state.errorMessage} />
                  
                    

                }






            </div>
        );
    }
}

export default App;
