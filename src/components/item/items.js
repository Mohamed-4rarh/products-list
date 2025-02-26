import React from 'react';

const Items = (props) => {
    const {items, del, increase, decrease} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <div style={{width: '100%', display: 'flex'}}>
                        <button onClick={() => increase(item.id)} style={{padding: '5px 15px'}}>+</button>
                        <p style={{width: 'fit-content', flex: '1'}}>{item.quantity}</p>
                        <button onClick={() => decrease(item.id)} style={{padding: '5px 15px'}}>-</button>
                    </div>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items