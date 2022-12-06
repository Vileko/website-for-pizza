import React from 'react';

const HomePizza = (props) => {
    return (
        <div className='content_pizza'>
            <img src={props.post.img} alt="" />
            <div className='information'>
                <h2>{props.post.title}</h2>
                <h4>Cостав:</h4>
                <p>{props.post.compound}</p>
            </div>
            <div className='buy'>
                <span>{props.post.price} Р</span>
                <div onClick={() => props.btnInBasket(props.post)}>В корзину</div>
            </div>
        </div>
    );
};

export default HomePizza;