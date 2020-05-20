import React, { Component } from 'react';

import classes from './VendingMachine.module.css';

import Showcase from './showcase/Showcase';
import PickupPort from './pickupPort/PickupPort';
import CoinSlot from './coinSlot/CoinSlot';
import Aux from '../../hoc/Auxiliary';

class VendingMachine extends Component{
    render() {
        return (
            <Aux>
                <p> Dream Vending Machine </p>
                <div className = {classes.VendingMachine}>
                    <Showcase />
                    <CoinSlot />
                    <PickupPort />
                </div>
            </Aux>
        );
    }
}

export default VendingMachine;