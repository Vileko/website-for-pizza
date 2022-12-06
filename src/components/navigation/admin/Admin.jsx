import React from 'react';
import { useState, useRef} from 'react';
import AdminArray from './AdminArray';


const Admin = ({arrayForm, setArrayForm}) => {

    const task = useRef();

    function btnTastAtWork(e) {
        setArrayForm(arrayForm.filter(ar => ar.id !== e.id))
    }


    return (
        <div className='container'>
            {arrayForm.map(array => <AdminArray post={array} key={array.id} btnTastAtWork={btnTastAtWork} task={task}/>)}
        </div>
    );
};

export default Admin;