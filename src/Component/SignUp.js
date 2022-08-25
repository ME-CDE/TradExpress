import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {handleSubmit, strength, nameChange, nameChange2} from './logic'
function SignUp() {
  let link1 = useNavigate()
  const [input, setInput] = useState(null)
  const [input1, setInput1] = useState(null)
  const [input2, setInput2] = useState(null)
  const [input3, setInput3] = useState(null)
  const [style, setStyle] = useState({})
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({})
  const [style3, setStyle3] = useState({})
  const [name, setName] = useState("Username")
  
  
  return (
    <div className='signUp'>
      <div className="formDiv">
        <h2>Welcome!</h2>
        <div className="formHead">
          <p onClick={()=> nameChange2(setName)}>Individual</p>
          <p onClick={()=> nameChange(setName)}>Business</p>
        </div>
        <form action="" onSubmit={(e)=> handleSubmit(e,link1, setInput, setInput1, setInput2, setInput3, setStyle, setStyle1, setStyle2, setStyle3)}>
          <input type="text" name="username" id="1" placeholder= {name}  style={style1}/>
          {input1}
          <input type="email" name="Email" id="2" placeholder='Email' style={style2}/>
          {input2}
          <input type="tel" name="PhoneNO" id="3" placeholder='Phone Number'style={style3}/>
          {input3}
          <input type="password" name="Password" id="pass" placeholder='Password' style={style} onChange={(e)=> strength(e, setInput ,setStyle)}/>
          {input}
          <input type="text" name="ReferralCode" id="5" placeholder='Referral Code(optional)' />
          <p className='firstP'>By clicking the Sign Up button below, you agree to TradExpress <small>Terms and services</small></p>
          <button type="submit">Sign Up</button>
          <p className='lastP'>Already have an account ? <Link to={"/Account/Login"}><small>Click here</small></Link></p>
          
        </form>
      </div>
    </div>
  )
}

export default SignUp