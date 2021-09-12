import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export class Location extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgeUrl} />
                    <Card.Body>
                    <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>
                            {this.props.lat}
                    
                        {this.props.lon}
                       </Card.Text>
                        
                    </Card.Body>
                </Card>
            

            </div>
        );
    }
}

export default Location;
