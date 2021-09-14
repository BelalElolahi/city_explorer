import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Weather extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item disabled>Weather</ListGroup.Item>
                    {
                        this.props.weatherData.map(item => {
                            
                            console.log(item.date);
                            console.log(item.description);
                            
                            <ListGroup.Item>
                                {item.date} :
                                {item.description}
                            </ListGroup.Item>;
                        

                        })

                    }

                </ListGroup>
            </div>
        );
    }
}

export default Weather;
