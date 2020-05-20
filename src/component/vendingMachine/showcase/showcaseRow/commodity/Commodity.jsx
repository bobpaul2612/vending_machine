import React, { Component } from 'react';

import classes from './Commodity.module.css';

class Commodity extends Component{
    render() {
        return (
            <div className = {classes.Commodity}>
                <p>{this.props.product['name']}</p>
                <p>{this.props.product['price']}</p> 
                <button>Buy</button>           
            </div>
        );
    }
}

export default Commodity;