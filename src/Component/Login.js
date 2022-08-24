import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {handleSubmit2, inputVal} from './logic'
function Login() {
  let link = useNavigate();
  const [warning1, setWarning1] = useState(false)
  const [val1, setVal1] = useState(null)
  const [val2, setVal2] = useState(null)
  const [valStyle1, setvalStyle1] = useState({})
  const [valStyle2, setvalStyle2] = useState({})
  return (
    <div className='login'>
      <div className="formDiv">
        <h2>Welcome Back!</h2>
        <form action="" onSubmit={(e)=> handleSubmit2(e, setVal1, setVal2, setvalStyle1, setvalStyle2, link, setWarning1)}>
          <input type="text" name="" id="" placeholder='Username' style={valStyle1} onInput={(e)=> inputVal(e, setVal1, setvalStyle1, warning1)}/>
          {val1}
          <input type="password" name="password" id="password" placeholder='Password' style={valStyle2} onInput={(e)=> inputVal(e, setVal2, setvalStyle2, warning1)}/>
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