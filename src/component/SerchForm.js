import React, { Component } from 'react';

export class SerchForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handelSubmit}>

                    <input type="text" placeholder="Enter the city"
                     onChange={this.props.handelInputLocation} required/>

                    <input type="submit" value="Explorer" />

                </form>


            </div>
        );
    }
}

export default SerchForm;
