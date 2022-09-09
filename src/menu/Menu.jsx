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
                <NavLink exact activeClassName={activeClass} to="/reacttut/"> Axios </NavLink>  
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/reacttut/boot"> boot </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/reacttut/asiox"> card </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/reacttut/search"> Search </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/reacttut/Weather"> Weather </NavLink>
                </div>
                <div className="nav_manu">
                <NavLink exact activeClassName={activeClass} to="/reacttut/api"> Api </NavLink>
                </div>
            </div>
        </>
    );
}

export default Menu;