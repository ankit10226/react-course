import React, { useContext} from 'react'
import Loginpage from '../../Components/UserLoginComponents/LoginPage/Loginpage'
import HomePage from '../../Components/UserLoginComponents/HomePage/HomePage' 
import AuthContext from '../../Store/auth-context'

const UserLogin = () => {  
  const ctx = useContext(AuthContext);
  return (
    <>
      {!ctx.isLoggedIn && <Loginpage/>}
      {ctx.isLoggedIn && <HomePage/>}
    </>
  )
}

export default UserLogin
