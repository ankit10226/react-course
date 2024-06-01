import React, { useContext } from 'react'
import Navbar from '../../UI/Navbar/Navbar'
import Button from '../../UI/Button/Button';
import AuthContext from '../../../Store/auth-context';

const HomePage = () => { 
  const ctx = useContext(AuthContext);
  return ( 
    <div className='flex justify-center items-center flex-col'>
      <Navbar title={'This is Home Page'}/>
      <p className='text-center text-xl text-red-400 font-semibold my-16'>Welcome!</p>
      <Button className="rounded-md py-1 px-4 border bg-slate-700 text-white my-2 mx-5" onClick={()=>ctx.onLog(!ctx.isLoggedIn)}>Log Out</Button>
    </div> 
  )
}

export default HomePage
