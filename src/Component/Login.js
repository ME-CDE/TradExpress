import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {handleSubmit2} from './logic'
function Login() {
  let link = useNavigate();
  const [val1, setVal1] = useState(null)
  const [val2, setVal2] = useState(null)
  const [valStyle1, setvalStyle1] = useState({})
  const [valStyle2, setvalStyle2] = useState({})
  return (
    <div className='login'>
      <div className="formDiv">
        <h2>Welcome Back!</h2>
        <form action="" onSubmit={(e)=> handleSubmit2(e, setVal1, setVal2, setvalStyle1, setvalStyle2, link)}>
          <input type="text" name="" id="" placeholder='Username' style={valStyle1}/>
          {val1}
          <input type="text" name="password" id="pass" placeholder='Password' style={valStyle2}/>
          {val2}
          <div className="rememberDiv">
            <div className="rememberIconDiv">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember"></label>
              <p>Remember password</p>
            </div>
            <p className='forget'>Forgot Password?</p>
          </div>
          <button type="submit">Log in</button>
          <p className='lastP'>New User ? <Link to={"/Account/"}><small>Click here</small></Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login