import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SerchForm from './component/SerchForm';
import Location from './component/Location';
import Weather from './component/Weather';
import Movies from './component/Movies';
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
            weatherData: [],
            movieData: []


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
            baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.nameOfCity}&format=json`
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

        }).catch(err => {
            console.log(err);
            this.setState({
                showData:false,
                errorMessage: err,
                alertShow: true
            });
            console.log(this.state.alertShow);
            console.log(this.state.errorMessage);
        }) .then(() => {
            let city = this.state.nameOfCity.toLocaleLowerCase();
            let city_name = city.split(',')[0];

            console.log(this.state.nameOfCity);
            console.log(city_name);
            axios.get(`http://${process.env.REACT_APP_BAKEND_URL}/weather?city=${city_name}&lat=${this.state.lat}&lon=${this.state.lon}`)
                .then((res) => {
                    console.log(res.data,'hello');
                    console.log(res.data.data,'hello');

                    

                    this.setState({
                        weatherData: res.data.data,
                        alertShow:false,
                    showData:true
                    });
                    console.log(this.state.weatherData);

                    console.log(this.state.nameOfCity);
                }).catch(err => {
                    console.log(err);
                    this.setState({
                        showData: false,
                        errorMessage: err,
                        alertShow: true
                    });
                    console.log(this.state.alertShow);
                    console.log(this.state.errorMessage);
                });


            axios.get(`http://${process.env.REACT_APP_BAKEND_URL}/movies?searchQuery=${city_name}`).then((res) => {
                console.log(res.data);
                console.log(res.data.data,'hello');
                

                this.setState({
                    movieData: res.data.data,
                    alertShow:false,
                    showData:true,
                });
                console.log(this.state.movieData);

                console.log(this.state.nameOfCity);
            });



        });
    }

    /*.catch(error => {
        console.log(error);
        this.setState({
            errorMessage: error,
            alertShow: true
        });
        console.log(this.state.alertShow);
        console.log(this.state.errorMessage);
    });

*/

    render() {
        return (
            <div className="row">
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

                        <Weather weatherData={this.state.weatherData} />
                        <Movies movieData={this.state.movieData} />
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
