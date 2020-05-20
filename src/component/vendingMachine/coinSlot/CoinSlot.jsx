import React, { Component } from 'react';

import classes from './CoinSlot.module.css';

class CoinSlot extends Component{
    state = {
        coin : {   1 : 0,
                   5 : 0,
                  10 : 0,
                  50 : 0,
                 100 : 0},
        total_price : 0
    }

    input_coin(price){
        this.setState( prevState => { 
            let coin = {...prevState.coin}
            
            coin[price]++;

            return{
                coin: coin,
                total_price: prevState.total_price+price
            }
        });
    }

    return_coin(){
        this.setState( prevState => {
            let coin = {   1 : 0,
                5 : 0,
               10 : 0,
               50 : 0,
              100 : 0};
            
            return{
                coin: coin,
                total_price: 0
            }
        });
    }

    render() {
{/* <p key = {key}>show {key} coin num : {this.state.coin[key]}</p> */}
        let show_coin = Object.keys(this.state.coin).map( (key, index) => 
            <nobr key={key}>{this.state.coin[key]}, </nobr>
        );

        return (
            <div className = {classes.CoinSlot}>
                <p>CoinSlot</p>
                <nobr>[{show_coin}]</nobr>
                <p>show coin : {this.state.total_price}</p>
                <p>input coin</p>
                <button onClick={() => this.input_coin(1)}>1</button>
                <button onClick={() => this.input_coin(5)}>5</button>
                <button onClick={() => this.input_coin(10)}>10</button>
                <button onClick={() => this.input_coin(50)}>50</button>
                <button onClick={() => this.input_coin(100)}>100</button>
                <p>return coin</p>
                <button onClick={() => this.return_coin()}>Return coin</button>

            </div>
        );
    }
    
}

export default CoinSlot;