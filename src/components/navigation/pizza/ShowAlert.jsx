import React, { useEffect, useState } from 'react';

const ShowAlert = ({showAlertActive,...props}) => {
    const [togle, setTogle] = useState(false);
    
    useEffect(() => {
        if(props.text !== null){
            const timer = setTimeout(props.hideAlert, 2000);
            setTogle(true)
            return () => clearTimeout(timer)
        } else {
            setTogle(false)
        }
    },[props.text, props.hideAlert]);

    return (
        <div className='show_alert'>
            {togle === true ? <li className={showAlertActive === true ? "show_alert_text show_alert_text_active" : "show_alert_text"}>{props.text}</li> : false}
        </div>
    );
};

export default ShowAlert;