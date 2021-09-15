import React, { Component } from 'react';
import Movie from './Movie';
export class Movies extends Component {
    render() {
        return (
            <div>
                <Movie movieData={this.props.movieData}/> 
            </div>
        );
    }
}

export default Movies;
