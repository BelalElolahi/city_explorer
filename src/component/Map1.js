import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export class Map1 extends Component {
    
  
    render() {
        return (

              <Alert>
               error {this.props.errormessage}
              </Alert>
        
        );
      }
}
export default Map1;

