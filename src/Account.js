import React from 'react'
import './Styles/account.css';
import { Outlet} from 'react-router-dom';
import NavAccount from './Component/NavAccount';

const Account =()=> {
  return (
    <div className='Account'>
      <NavAccount/>
      <Outlet/>
    </div>
  )
}

export default Account