import React, { useState } from 'react';
import NavButtons from './NavButtons';
import {Link} from "react-router-dom"
import './Nav.css'
import { MenuItems } from './MenuItems'


function Nav() {

    const [clicked, setClick] = useState(false);

    return (
        <nav className="nav">
            <h1 className="nav-logo">Vocascan</h1>
            <div className="menu-icon" onClick={() => setClick(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'} >
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li className={item.cName} key={index}><Link className="link" style={{ textDecoration: 'none' }} to={item.url}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
            <NavButtons />
        </nav>
    );
}

export default Nav;
