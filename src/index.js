import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Account from './Account';
import Trade from './Component/Trade'
import Login from './Component/Login'
import Register from './Component/SignUpDiv'
import MainApp from './MainApp'
import Welcome from './Component/Welcome';
import SignUp from './Component/SignUp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Account' element={<Account/>}>
          <Route path='/Account/SignUp' element={<Register/>}>
          <Route index element={<SignUp/>}/>
          <Route path='/Account/SignUp/Welcome' element={<Welcome/>}/>
          </Route>
          <Route path='/Account/Login' element={<Login/>}/>
          <Route path='/Account/Trade' element={<Trade/>}/>
          <Route index element= {<Navigate to='/Account/SignUp' />} />
        </Route>
        <Route path='/App' element={<MainApp/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
