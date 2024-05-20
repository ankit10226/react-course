import React from 'react'
import Navbar from '../../UI/Navbar/Navbar'

const HomePage = ({getLoginData}) => {
  const loginData = (data) =>{
    getLoginData(data);
  }
  return (
    <>
      <Navbar title={'This is Home Page'} page={'home'} getLoginData={loginData}/>
      <p className='text-center text-xl text-red-400 font-semibold my-16'>Welcome!</p>
    </>
  )
}

export default HomePage
