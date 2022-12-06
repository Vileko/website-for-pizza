import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import MyButton from '../../../UI/Button/MyButton';


const ConfirmationWindow = ({btnClose,setArrayBasket,authorization,summArrayElements, arrayBasket, setArrayForm, arrayForm}) => {

    const [value, setValue] = useState("");
    const [valueName, setValueName] = useState('');

    const [phoneCheck, setPhoneCheck] = useState(false);
    const [checkName, setCheckName] = useState(false);

    const [checkForm, setCheckForm] = useState(true);

    function form(event){
        event.preventDefault()
    }

    function getPhoneCheck(event) {
        let phone = event.target.value;
        let newPhone = phone.replace(/_/g, '').replace(/\s/g, '');
        if(newPhone.length < 14){
            setPhoneCheck(false)
        } else {
            setPhoneCheck(true)
        }
        setValue(newPhone)
    }

    function getNameCheck(event){
        let name = event.target.value;
        if((name.length) < 1){
            setCheckName(false)
        } else {
            setCheckName(true)
        }
        setValueName(name)
    }

    function btnCheck() {
        let newAr = {
            id: Date.now(),
            tel: value,
            name: valueName,
            order : arrayBasket,
            orderNumber: arrayForm.length + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
        }
        if((phoneCheck && checkName) === false){
            setCheckForm(false);
        } else {
            setCheckForm(true);
            setArrayForm([...arrayForm, newAr])
            setTimeout(() => {
                btnClose()
                setArrayBasket([])
                authorization(true)
            },1)
        }
    }
   
    return (
        <div className='modal_wrapper'>
            <div className='modal-window'>
                <form onSubmit={(event) => form(event)}>
                    <div onClick={btnClose} className='form_btn_close'></div>      
                  
                    <h3>Ваш заказ <br /> на сумму {summArrayElements()} Р</h3>
                    <InputMask 
                       type='text'
                       mask="+7 (999) 999 9999"
                       placeholder="+7 (981) 999 9999"
                       value={value}
                       onChange={event => getPhoneCheck(event)}
                    />
                    <input 
                        type="text" 
                        placeholder="Введите имя"
                        value={valueName}
                        onChange={event => getNameCheck(event)}
                    />
                  
                    {checkForm === false ? <div>Неверное имя или телефон</div> : false}
                    <MyButton className='form_btn_design' onClick={btnCheck} >Оформить</MyButton> 
                </form>
            </div>
        </div>
    );
};

export default ConfirmationWindow;