import React, { Component } from 'react';

import classes from './Showcase.module.css';

import ShowcaseRow from './showcaseRow/ShowcaseRow';

class Showcase extends Component{
    state = {
        commodity_list : [
            {'id': 'c01', 'name': '礦泉水', 'price': 10, 'state': 0, 'num': 15},
            {'id': 'c02', 'name': '可樂', 'price': 29, 'state': 0, 'num': 20},
            {'id': 'c03', 'name': '麥香奶茶', 'price': 15, 'state': 0, 'num': 30},
            {'id': 'c04', 'name': '阿華田', 'price': 20, 'state': 0, 'num': 30},
            {'id': 'c05', 'name': '雪碧', 'price': 29, 'state': 0, 'num': 30},
            {'id': 'c06', 'name': '蘋果汁', 'price': 15, 'state': 0, 'num': 30},
            {'id': 'c07', 'name': '葡萄汁', 'price': 15, 'state': 0, 'num': 30},
            {'id': 'c08', 'name': '伯朗咖啡', 'price': 25, 'state': 0, 'num': 30},
            {'id': 'c09', 'name': '咖啡廣場', 'price': 25, 'state': 0, 'num': 30},
            {'id': 'c10', 'name': 'RedBull', 'price': 45, 'state': 0, 'num': 30},
            {'id': 'c11', 'name': '舒跑', 'price': 20, 'state': 0, 'num': 30},
            {'id': 'c12', 'name': '寶礦力', 'price': 18, 'state': 0, 'num': 30},
            {'id': 'c13', 'name': '蘆筍汁', 'price': 15, 'state': 0, 'num': 30},
            {'id': 'c14', 'name': '秘密', 'price': 10, 'state': 0, 'num': 30},
            {'id': 'c15', 'name': '隨便', 'price': 10, 'state': 0, 'num': 30},
        ]
    }

    split_commodity_row = ( commodity_list ) => {
        let commodity_row = [];
        let row = [];
        let cnt = 0;
        commodity_list.map(commodity => {
            if(cnt == 7){
                commodity_row.push(row);
                row = [];
                cnt = 0;
            }
            row.push(commodity);
            cnt++;
        });
        commodity_row.push(row);
        return commodity_row;
    };

    render() {

        let commodity_row = this.split_commodity_row(this.state.commodity_list).map( row => {   
            return <ShowcaseRow key={row[0]['id']} commodity_row={row} />
            // console.log(row[0]['id']);
        });

        return (
            <div className={classes.Showcase}>
                {commodity_row}
            </div>
            
        );
    }
}

export default Showcase;