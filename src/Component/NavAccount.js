import React from 'react'
import { useNavigate, NavLink} from 'react-router-dom';
import {change1, navClick} from './logic'
const NavAccount = () => {
    let link = useNavigate();
    let activeClassName = 'clicked';
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
                    <button onClick ={navClick} ><NavLink  to={'/Account/SignUp'} className={({ isActive }) => isActive ? activeClassName : "notClicked"
                    }>Get Started</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default NavAccount