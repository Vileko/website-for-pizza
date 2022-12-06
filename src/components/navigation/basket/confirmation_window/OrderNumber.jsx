import React from 'react';


const OrderNumber = ({btnOrderClose, arrayForm}) => {

    function form(event){
        event.preventDefault()

    }
    return (
        <div className='modal_wrapper'>
        <div className='modal-window'>
            <form onSubmit={form}>
                <div className='form_btn_close' onClick={btnOrderClose}></div>      
               
                <h3>Ваш заказ № {arrayForm[arrayForm.length - 1].orderNumber}</h3>
            </form>
        </div>
    </div>
    );
};

export default OrderNumber;