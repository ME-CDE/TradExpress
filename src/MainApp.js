import React from 'react'
// import { icons } from 'react-icons';
// import ReactLoading from 'react-loading';
import './Styles/mainApp.css';
import {FaWallet} from 'react-icons/fa'
const MainApp = () => {
  return (
    <div className='App'>
      {/* <ReactLoading type={"bars"}  color={"rgba(255, 255, 255, 0.15)"} height={'35px'} width={'35px'} /> */}
      <nav>
        <button className='buttonWallet'><FaWallet fontSize={"25px"} color={"#800080"} className="wallet"/></button>
      </nav>
    </div>
  )
}

export default MainApp