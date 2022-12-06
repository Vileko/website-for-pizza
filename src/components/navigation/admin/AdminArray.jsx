import React from 'react';
import AdminOrder from './AdminOrder';

const AdminArray = ({...props}) => {

    return (
       <div>
            <div className='admin_content'>
                <div>
                    <div className='form_btn_close' onClick={() => props.btnTastAtWork(props.post)}></div>
                </div>
                <div><span>Номер телефона:</span> {props.post.tel}</div>
                <div><span>Имя:</span> {props.post.name}</div>
                <div><span>Номер заказа:</span> {props.post.orderNumber}</div>
                <div>
                    {props.post.order.map(ord => <AdminOrder post={ord} key={ord.id}/>)}
                </div>
            </div>
       </div>
    );
};

export default AdminArray;