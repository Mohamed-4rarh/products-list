import React from 'react';

const Total = (props) => {
    const {items} = props;
    let total = 0
    for (let i = 0; i < items.length; i++) {
        let quantity = parseFloat(items[i].quantity)
        let singleItemPrice = parseFloat(items[i].price)
        total += (quantity * singleItemPrice)
    }
    return (
        <div>
            <p className="text">Total Price: {total}</p>
        </div>
    )
}

export default Total