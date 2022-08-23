import React from 'react'
import SignUp from './SignUp'
import {Routes,Route} from 'react-router-dom';
import Welcome from './Welcome';
const SignUpDiv = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Welcome' element={<Welcome/>}/>
        </Routes>
    </div>
  )
}

export default SignUpDiv