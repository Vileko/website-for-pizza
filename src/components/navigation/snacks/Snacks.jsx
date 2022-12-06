import React, {useState} from 'react';
import ShowAlert from '../pizza/ShowAlert';
import ArraySnacks from './ArraySnacks';

const Snacks = ({arraySnacks, arrayBasket, setArrayBasket}) => {
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
            {arraySnacks.map(array => <ArraySnacks post={array} key={array.id}btnInBasket={btnInBasket}/>)}
        </div>
    );
};

export default Snacks;