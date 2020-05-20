import React, { Component } from 'react';

import classes from './ShowcaseRow.module.css';
import Commodity from './commodity/Commodity';

class ShowcaseRow extends Component {
    render(){
        let commodity_row = this.props.commodity_row.map(product => 
            <Commodity key={product['id']} product = {product}/>
        );

        return (
            <div className={classes.ShowcaseRow}>
                {commodity_row}
            </div>
        );
    }
}

export default ShowcaseRow;