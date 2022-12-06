import React, { useState } from 'react';
import ArrayPizza from './ArrayPizza';
import ShowAlert from './ShowAlert';

const Pizza = ({arrayBasket, setArrayBasket, arrayPizza}) => {
    const [showAlert, setShowAlert] = useState(null);
    const [showAlertActive, setShowAlertActive] = useState(false);

    function hideAlert(){
        setShowAlert(null);
      }

    function btnInBasket(array, price = array.price, quantity  = 1) {
        const newIndex = arrayBasket.findIndex(ar => ar.id === array.id)
        
        if(newIndex < 0){
            const newArray = {
                ...array,
                pricce: price,
                quantity: quantity,
            }
            setArrayBasket([...arrayBasket, newArray])
            setShowAlertActive(false)
            setShowAlert(
                <div className="postList_title_text"><span>{array.title}</span> добавлен в корзнину</div>
              )
        } else {
            setShowAlertActive(true)
            setShowAlert(
            <div className="postList_title_text"><span>{array.title}</span> уже в корзине</div>
            )
        }
    }



    return (
        <div className='pizza container'>
             <ShowAlert text={showAlert} hideAlert={hideAlert} showAlertActive={showAlertActive}/>
            {arrayPizza.map(array => <ArrayPizza post={array} key={array.id}btnInBasket={btnInBasket}/>)}
        </div>
    );
};

export default Pizza;