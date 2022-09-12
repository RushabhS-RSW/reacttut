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
                <NavLink exact activeClassName={activeClass} to="/boot"> boot </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/asiox"> card </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/search"> Search </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/Weather"> Weather </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/api"> Api </NavLink>
                </div>
            </div>
        </>
    );
}

export default Menu;