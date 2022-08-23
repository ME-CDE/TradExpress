import React from 'react'
import { useNavigate } from 'react-router-dom'
import mail from '../Images/mailing.svg'
const Welcome = () => {
  let link = useNavigate();
  const userData = JSON.parse(localStorage.getItem("UserData"))
  return (
    <div className='Welcome'>  
      <div className="formDiv">
        <h2 className='firstH2'>You're Almost In!</h2>
        <img src={mail} alt="mail" />
        
        <p className='messageP'>An activation link has been sent to <span>{userData.email}</span> Please click on the link to verify your email and activate your TradExpress account.</p>
        <button className='welcomeButton' onClick={()=> link("/Account/Login")}>Continue</button>
        <small className='messageSmall'>Didn't get an email? Kindly click <span>resend email</span> Wrong email supplied? <span>Edit email address</span></small>
      </div>
    </div>
  )
}

export default Welcome