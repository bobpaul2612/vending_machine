import React, { Component } from 'react';

import classes from './PickupPort.module.css';

class PickupPort extends Component{
    render() {
        return (
            <div className = {classes.PickupPort}>
                <p>pickupPort</p>
                <p>input coin</p>
                <button>100</button>
                <button>50</button>
                <button>10</button>
                <button>5</button>
                <button>1</button>
                <p>return coin</p>
                <button>Return coin</button>

            </div>
        );
    }
}

export default PickupPort;