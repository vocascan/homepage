import React from 'react';
import './MediumButton.css'
import {useHistory} from "react-router-dom"


function MediumButton(props) {
    const title = props.title
    const cName = props.cName
    const link = props.link

    let history = useHistory();




    return (
            <button className={cName} onClick={() => history.push(link)}>
                {title}
            </button>        
    );
}

export default MediumButton;