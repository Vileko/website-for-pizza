import React, { useState } from 'react';
import BasketArray from './BasketArray';
import ConfirmationWindow from './confirmation_window/ConfirmationWindow';
import OrderNumber from './confirmation_window/OrderNumber';
import MyButton from '../../UI/Button/MyButton';

const Basket = ({arrayBasket, setArrayBasket, arrayForm, setArrayForm}) => {

   const [confirmationWindow, setConfirmationWindow] = useState(false);
   const [successfulAuthorization, setSuccessfulAuthorization] = useState(false)
   

    function summArrayElements(){
        let x = 0;
        return arrayBasket.map(i=>x+=i.pricce, x).reverse()[0];
    }
    
    function increaseTheAmount(post, quantity = 1) {
        const indexPost = arrayBasket.findIndex(array => array.id === post.id);
        if(arrayBasket[indexPost].price > 0){
            let newPost = {
                ...arrayBasket[indexPost],
                pricce: arrayBasket[indexPost].pricce + arrayBasket[indexPost].price,
                quantity: arrayBasket[indexPost].quantity + quantity
            }
            const newCart = arrayBasket.slice();
            newCart.splice(indexPost, 1, newPost);
            setArrayBasket(newCart);
        }
    }


    function removeArrayToBasket(post, quantity = 1){
        const indexPost = arrayBasket.findIndex(array => array.id === post.id)
    
        if(arrayBasket[indexPost].price > 0){
          let newPost = {
            ...arrayBasket[indexPost],
            pricce: arrayBasket[indexPost].pricce - arrayBasket[indexPost].price,
            quantity: arrayBasket[indexPost].quantity - quantity
          }
          const newCart = arrayBasket.slice();
          newCart.splice(indexPost, 1, newPost);
          setArrayBasket(newCart);
        }
          if(arrayBasket[indexPost].quantity < quantity + 1){
            const newCart = arrayBasket.slice();
            newCart.splice(indexPost, 1);
            setArrayBasket(newCart);
        } 
    }

    function btnCloseWindow() {
        setConfirmationWindow(false)
    }
    function btnOpenWindow() {
        setConfirmationWindow(true)
    }

    function closeOrderNumber(){
        setSuccessfulAuthorization(false)
    }

    return (
        <div className='container'>
            {confirmationWindow === true ?  <ConfirmationWindow btnClose={btnCloseWindow} summArrayElements={summArrayElements} arrayBasket={arrayBasket} setArrayBasket={setArrayBasket} authorization={setSuccessfulAuthorization} arrayForm={arrayForm} setArrayForm={setArrayForm}/> : false}

            {successfulAuthorization === true ? <OrderNumber btnOrderClose={closeOrderNumber} arrayForm={arrayForm}/> : false}
           
            <div className='cart_checkout'>
                {summArrayElements() > 0 ? <h3 className='the_total_cost' style={{marginTop: '15px'}}>К оплате {summArrayElements()} Рублей <MyButton onClick={btnOpenWindow}>Оформить заказ</MyButton></h3> : <h3 style={{textAlign: 'center', fontWeight: '400', marginTop: '15px'}}>Корзина пустая</h3>}
            </div>
            {arrayBasket.map(array => <BasketArray post={array} key={array.id} increaseTheAmount={increaseTheAmount} removeArrayToBasket={removeArrayToBasket}/>)}
        </div>
    );
};

export default Basket;