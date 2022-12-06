import React from 'react';

const BasketArray = ({...props}) => {
    return (
        <div className='basket_pizza container'>
            <img src={props.post.img} alt="" />
            <div className='information'>
                <div >
                    <h2>{props.post.title}</h2>
                    <h5 style={{fontWeight: '400'}}>Cостав:</h5>
                    <p>{props.post.compound}</p>
                </div>
                {props.post.quantity} шт
                <div>
                    <span onClick={() => props.removeArrayToBasket(props.post)}> - </span>
                    <span>{props.post.pricce} Р</span>
                    <span onClick={() => props.increaseTheAmount(props.post)}> +</span>
                </div>
            </div>
        </div>
    );
};

export default BasketArray;