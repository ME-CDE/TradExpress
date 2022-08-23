import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import {change1, navClick} from './logic'
const NavAccount = () => {
    const [disable, setDisable] = useState('')
    let location = useLocation();
    let link = useNavigate();
    let activeClassName = 'clicked';
    useEffect(()=>{
        if (location.pathname === '/Account/SignUp/Welcome') {
            setDisable(re => re= "/Account/SignUp/Welcome")
        }else{
            setDisable(re => re= "/Account/SignUp")
        }
    },[location, disable])
    return (
        <div className="AccountNav">
            <div className="AccountnavBar">
                <div className="AccountnavLogo" onClick={() => link("/")}></div>
                <label htmlFor="menu" className="menu" onClick={change1}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </label>
                <div className='AccountnavCon'>
                    <button onClick ={navClick}><NavLink to={'/Account/Trade'} className={({ isActive }) => isActive ? activeClassName : "notClicked"
                    }>Instant Buy/Sell</NavLink></button>
                    <p className='pNav'>Learn</p>
                    <button onClick ={navClick}><NavLink to={'/Account/Login'} className={({ isActive }) => isActive ? activeClassName : "notClicked"
                    }>Log in</NavLink></button>
                    <button onClick ={navClick} ><NavLink  to={disable} className={({ isActive }) => isActive ? activeClassName : "notClicked"
                    }>Get Started</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default NavAccount