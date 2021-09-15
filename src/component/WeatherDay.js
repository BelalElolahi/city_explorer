import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


export class WeatherDay extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item>Weather</ListGroup.Item>
                    {
                        this.props.weatherData.map(item =>{
                            console.log(item.date);
                            
                            
                            <><ListGroup.Item>{item.date}</ListGroup.Item>
                            <ListGroup.Item>{item.description}</ListGroup.Item></>;

                        } )
                            
                        
                    }
                </ListGroup>
                
            </div>
        );
    }
}

export default WeatherDay;
