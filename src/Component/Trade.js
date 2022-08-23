import React, { useState } from 'react'
import {nameChangeA, nameChangeA2} from './logic'

function Trade() {
  const [name, setName] = useState("Buy")
  const [currency, setCurrency] = useState("NGN")
  return (
    <div className='trade'>
      <div className="formDiv">
        <h2>Buy/Sell Instantly</h2>
        <div className="formHead">
          <p onClick={()=> nameChangeA2(setName)}>Buy</p>
          <p onClick={()=> nameChangeA(setName)}>Sell</p>
        </div>
        <form action="">
          <label htmlFor="coins">Coins to {name}</label>
          <select name="" id="coins" >
            <option value="BTC">Bitcoin(BTC)</option>
            <option value="ETH">Ethereum(ETH)</option>
            <option value="USDT">Usdt(USDT)</option>
            <option value="BNB">Binance Coin(BNB)</option>
            <option value="XRP">Ripple(XRP)</option>
          </select>
          <label htmlFor="currency">Currency</label>
          <select name="currency" id=""  onChange={(e)=> setCurrency(re=> re = e.target.value)}>
            <option value="NGN">Naira(NGN)</option>
            <option value="USD">Dollars(USD)</option>
          </select>
          <h3>Amount</h3>
          <div className='amountInputDiv'>
          <label htmlFor="AmountInput" className='labelAmount'>{currency}</label>
          <input type="text"  placeholder='Amount' className='Amount'/>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default Trade