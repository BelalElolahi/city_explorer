import React, { Component } from 'react';

export class Movie extends Component {
    render() {
        return (
            <div className="row">
                  
                  
                   {
                        this.props.movieData.map(item => {
                            console.log(item);
                            
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.imageUrl}/>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text> 
                                overview : {item.overview} /
                                averageVotes : {item.averageVotes} /
                                totalVotes : {item.totalVotes} / 
                                popularity : {item.popularity} / 
                                releasedOn : {item.releasedOn}
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
