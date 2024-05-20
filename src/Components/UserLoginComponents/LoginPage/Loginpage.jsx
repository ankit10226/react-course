import React, { useEffect, useState } from 'react'
import Navbar from '../../UI/Navbar/Navbar'
import Button from '../../UI/Button/Button';

const initalFormData = {
  username : '',
  password : ''
}

const Loginpage = ({getLoginData}) => {
  const [formData,setFormData] = useState(initalFormData); 
  // const [errorField, setErrorField] = useState('hidden');
  const [formIsValid, setFormIsValid] = useState(null);

  const handleFormData = (e) =>{
    const {value,name} = e.target;
    setFormData(prev=>({
        ...prev,
        [name]:value
    }));
  }  

  const submitFormHandler = (e) =>{
    e.preventDefault(); 
    localStorage.setItem('issLoggedIn',1);
    getLoginData(true);
  }

  // useEffect(()=>{
  //   console.log('USE EFFECT');
  //   return ()=>{
  //     console.log('CLEAN UP');
  //   };
  // },[formData.password]);

  useEffect(()=>{
    const identifier = setTimeout(() => {
      // console.log('Code Ran');
      formData.username.includes('@') && formData.password.length > 6 ? setFormIsValid(false) :setFormIsValid(true);
    }, 500); 
    return () => {
      // console.log('Cleanup');
      clearTimeout(identifier);
    };
  },[formData.username,formData.password]);
  return (
    <>
     <Navbar title={'This is Login Page'} page={'login'}/> 
     <div className="font-sans w-full h-full flex justify-center items-center flex-col font-semibold text-slate-600">
        <div className='shadow-lg border w-1/3 p-3 rounded-md m-1'>
          <form onSubmit={submitFormHandler}> 
              {/* <p className={`text-red-400 ${errorField}`}>Fill Both Username & Password</p> */}
              <div className='py-4'> 
                  <label htmlFor="username" className={`font-semibold text-slate-500 my-2 ${formIsValid && 'text-red-400'}`}>Username</label>
                  <input type="text" name="username" id="username" className={`shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold ${formIsValid && 'border-red-400'}`} value={formData.username} onChange={handleFormData}/> 
              </div>
              <div className='py-4'>
                  <label htmlFor="password" className={`font-semibold text-slate-500 my-2 ${formIsValid && 'text-red-400'}`}>Password</label>
                  <input type="text" name="password" id="password" className={`shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold ${formIsValid && 'border-red-400'}`} value={formData.password} onChange={handleFormData}/>
              </div> 
              <div className='text-right my-2'> 
                  <Button type="submit" className={`rounded-md py-1 px-4 border ${formIsValid ? 'bg-slate-400':'bg-slate-700'} text-white my-2`} disabled={formIsValid}>Login</Button>
              </div>
          </form> 
        </div>
     </div>
    </>
  )
}

export default Loginpage
