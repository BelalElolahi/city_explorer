import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

export class Map1 extends Component {
    
  
    render() {
        return (
            <Image src={this.props.imgeUrl} fluid />
           

        );
      }
}
export default Map1;

