import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () =>{
    const activeClass = {
        color: '#000',
    };
    return (
        <>
            <div className="nav">
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/"> Axios </NavLink>  
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/boot" style={{margin:'150px'}}> boot </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/asiox" style={{margin:'150px'}}> card </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/search" style={{margin:'150px'}}> Search </NavLink>
                </div>
            </div>
        </>
    );
}

export default Menu;