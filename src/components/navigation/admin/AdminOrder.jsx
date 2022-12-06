import React from 'react';

const AdminOrder = ({...props}) => {
    return (
        <div className='admin_content_position'>
            <div><span>Название:</span> {props.post.title}</div>
            <div><span>Количество:</span> {props.post.quantity}</div>
            <div><span>Состав:</span>  {props.post.compound}</div>
        </div>
    );
};

export default AdminOrder;