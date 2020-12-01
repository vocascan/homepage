import React from 'react';
import MediumButton from '../Buttons/MediumButton';
//import { useSelector } from 'react-redux';



function NavButtons() {

    //const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    //const userName = useSelector(state => state.login.user.userName);

    /*if (isLoggedIn) {
        return(
            <div className="nav-bar-buttons">
                <h3>{userName}</h3>
            </div>
        )
    }
    else {*/
        return (
        <div className='nav-bar-buttons' >
            <MediumButton title='Registrieren' cName='medium-opaque' link="/register"/>
            <MediumButton title='Login' cName='medium-transparent' link="/login" />
        </div >
        )
}



export default NavButtons;