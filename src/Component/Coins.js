import React from "react";
import { useState, useEffect } from "react";
import {percent, percentLogic} from './logic'
function Coins() {
    const [btc, setBtc] = useState({});
    const [eth, setEth] = useState({});
    const [usdt, setUsdt] = useState({});
    const [xrp, setXrp] = useState({});
    const [bnb, setBnb] = useState({});
    const [kda, setKda] = useState({});
    const [sol, setSol] = useState({});
    const url = "https://api2.binance.com/api/v3/ticker/24hr";

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Sorry cant fetch Data`);
            }
        })
        .then((data) => {
            setBtc(data.find(data => data.symbol === "BTCUSDT"));
            setEth(data.find(data => data.symbol === "ETHUSDT"));
            setUsdt(data.find(data => data.symbol === "USDTNGN"));
            setXrp(data.find(data => data.symbol === "XRPUSDT"));
            setBnb(data.find(data => data.symbol === "BNBUSDT"));
            setKda(data.find(data => data.symbol === "KDAUSDT"));
            setSol(data.find(data => data.symbol === "SOLUSDT"));
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    return (
        <div className="CoinContainer">
            <div className="CoinsDiv">
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">BTC/NGN</p>
                        <p className={percentLogic(btc.priceChangePercent)}>{btc.priceChangePercent ? percent(btc.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {btc.lastPrice && usdt.lastPrice ? `${Math.round(btc.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">ETH/NGN</p>
                        <p className={percentLogic(eth.priceChangePercent)}>{eth.priceChangePercent ? percent(eth.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {eth.lastPrice && usdt.lastPrice ? `${Math.round(eth.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">USDT/NGN</p>
                        <p className={percentLogic(usdt.priceChangePercent)}>{usdt.priceChangePercent ? percent(usdt.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {eth.lastPrice && usdt.lastPrice ? `${Math.round(usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">XRP/NGN</p>
                        <p className={percentLogic(xrp.priceChangePercent)}>{xrp.priceChangePercent ? percent(xrp.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {xrp.lastPrice && usdt.lastPrice ? `${Math.round(xrp.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">BNB/NGN</p>
                        <p className={percentLogic(bnb.priceChangePercent)}>{bnb.priceChangePercent ? percent(bnb.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {bnb.lastPrice && usdt.lastPrice ? `${Math.round(bnb.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">KDA/NGN</p>
                        <p className={percentLogic(kda.priceChangePercent)}>{kda.priceChangePercent ? percent(kda.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {kda.lastPrice && usdt.lastPrice ? `${Math.round(kda.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>

                <div className="Coins">
                    <div className="namePrice">
                        <p className="name">SOL/NGN</p>
                        <p className={percentLogic(sol.priceChangePercent)}>{sol.priceChangePercent ? percent(sol.priceChangePercent) : ``}</p>
                    </div>
                    <p className="Amount">
                        {sol.lastPrice && usdt.lastPrice ? `${Math.round(sol.lastPrice * usdt.lastPrice).toLocaleString()} NGN` : ''}
                    </p>
                </div>
                <div className="Coins seeMore">
                    <div className="seeMoreText">
                        <p>See More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coins;
