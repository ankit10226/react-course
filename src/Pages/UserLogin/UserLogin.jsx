import React, { useEffect, useState } from 'react'
import Loginpage from '../../Components/UserLoginComponents/LoginPage/Loginpage'
import HomePage from '../../Components/UserLoginComponents/HomePage/HomePage'

const UserLogin = () => {  
  const [issLoggedIn, setIssLoggedIn] = useState(false);
  const loginData = (loginStatus) =>{
    if(!loginStatus){
      localStorage.removeItem('issLoggedIn');
    }
    setIssLoggedIn(loginStatus);
    // console.log(loginStatus);
  }
  useEffect(()=>{
    let storedLoginData = localStorage.getItem('issLoggedIn'); 
    storedLoginData === '1' && setIssLoggedIn(true);
  },[]);
  return (
    <>
      {!issLoggedIn && <Loginpage getLoginData={loginData}/>}
      {issLoggedIn && <HomePage getLoginData={loginData}/>}
    </>
  )
}

export default UserLogin
