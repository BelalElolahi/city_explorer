import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export class Movie extends Component {
    render() {
        return (
            <div className="row">


                   {
                        this.props.movieData.map(item => {
                            console.log(item);
                            
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/100px180" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>;
                        

                        })

                    }
                

            </div>
        );
    }
}

export default Movie;
