import React from 'react'
import Apple from "../Images/apple.svg";
import Android from "../Images/android.svg";
import { useNavigate } from 'react-router-dom';
import {change} from './logic'
const Home1 =()=> {
    let link = useNavigate();
    return (
        <div className='Home1' >
            <div className="Nav">
                <div className="navBar">
                    <div className="navLogo"></div>
                    <input type="checkbox" name="" id="menu" />
                    <label htmlFor="menu" className="menu" onClick={change}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </label>
                    <div className='navCon'>
                        <div className="text">
                            <p onClick={()=>link("/Account/Trade")}>Instant Buy/Sell</p>
                            <p>Learn</p>
                        </div>
                        <div className="button">
                            <button onClick={()=>link("/Account/Login")}>Log in</button>
                            <button onClick={()=>link("/Account/")}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="Home1div">
            <div className="Home1Content">
                <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
                <p className='Home1Content-p'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
                <button onClick={()=>link("/Account/")}>Get Started</button>
                <div>
                    <div className="Downloads">
                        <img src={Apple} alt="" />
                        <img src={Android} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home1