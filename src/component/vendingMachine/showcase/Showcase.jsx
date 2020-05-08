import React, { Component } from 'react';

import classes from './Showcase.module.css';

import Commodity from './commodity/Commodity';


class Showcase extends Component{
    state = {
        commodity_list : [
            {'id': 'c01', 'name': '礦泉水', 'price': 10, 'state': 0, 'num': 15},
            {'id': 'c02', 'name': '可樂', 'price': 29, 'state': 0, 'num': 20},
            {'id': 'c03', 'name': '麥香奶茶', 'price': 15, 'state': 0, 'num': 30}
        ]
    }

    render() {
        let display = this.state.commodity_list.map(product => 
            <Commodity product = {product}/>
        );


        return (
            <div className = {classes.Showcase}>
                {display}
            </div>
        );
    }
}

export default Showcase;