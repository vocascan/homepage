import React from 'react';
import './BigButton.css';
import {useHistory} from "react-router-dom"

function BigButton(props) {
    const title = props.title;
    const cName = props.cName;
    const link = props.link;

    var history = useHistory();

    return (
        <button className={cName} onClick={() => history.push(link)}>
            {title}
        </button>
    );
}

export default BigButton;