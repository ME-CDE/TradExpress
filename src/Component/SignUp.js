import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {nameChange, nameChange2} from './logic'
function SignUp() {
  let link1 = useNavigate()
  // const [input, setInput] = useState(null)
  // const [input1, setInput1] = useState(null)
  // const [input2, setInput2] = useState(null)
  // const [input3, setInput3] = useState(null)
  // const [style, setStyle] = useState({})
  // const [style1, setStyle1] = useState({})
  // const [style2, setStyle2] = useState({})
  // const [style3, setStyle3] = useState({})
  const [name, setName] = useState("Username")
  const [place, setPlace] = useState("Username")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // const dataBase = {Username:e.target[0].value, email:e.target[1].value, password: e.target[3].value, accountType: e.target[0].placeholder}
    // if (e.target[3].value.length < 8) {
    //     setWarning(true)
    //     setInput(<small style={{color:"red"}}>Password must exceed 8 characters</small>)
    //     setStyle({border: "1px solid red"})
    //     if (e.target[3].value === "") {
    //         setInput(<small style={{color:"red"}}>Password cannot be empty</small>)
    //     }
    // }else{
    //     setWarning(false)
    //     setStyle({})
    // }
    // if (!e.target[0].value) {
    //     setInput1(<small style={{color:"red"}}>{e.target[0].placeholder} cannot be empty</small>)
    //     setStyle1({border: "1px solid red"})
    // }
    // if (!e.target[1].value) {
    //     setInput2(<small style={{color:"red"}}>Email cannot be empty</small>)
    //     setStyle2({border: "1px solid red"})
    // }
    // if (!e.target[2].value) {
    //     setInput3(<small style={{color:"red"}}>Phone Number cannot be empty</small>)
    //     setStyle3({border: "1px solid red"})
    // }
    // if ((e.target[0].value || e.target[1].value || e.target[2].value || e.target[3].value) && e.target[3].value.length > 8) {
    //     const data = JSON.stringify(dataBase)
    //     localStorage.setItem("UserData", data)
    // }
    setTimeout(() => {
      link1("/Account/SignUp/Welcome")
    }, 300);
}
  return (
    <div className='signUp'>
      <div className="formDiv">
        <h2>Welcome!</h2>
        <div className="formHead">
          <p onClick={()=> nameChange2(setPlace, setName)}>Individual</p>
          <p onClick={()=> nameChange(setPlace, setName)}>Business</p>
        </div>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" name={name} id="1" placeholder= {place}  />
          <input type="email" name="Email" id="2" placeholder='Email' />
          <input type="tel" name="PhoneNO" id="3" placeholder='Phone Number'/>
          <input type="password" name="Password" id="4" placeholder='Password'/>
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