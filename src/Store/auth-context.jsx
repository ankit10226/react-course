import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLog:()=>{}
});

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logHandler = (loginStatus) =>{ 
      if(!loginStatus){ 
        localStorage.removeItem('isLoggedIn');
      }
      setIsLoggedIn(loginStatus); 
    }
    useEffect(()=>{
      let storedLoginData = localStorage.getItem('isLoggedIn'); 
      storedLoginData === '1' && setIsLoggedIn(true);
    },[]);

    
    return (
        <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLog:logHandler}}>{props.children}</AuthContext.Provider>
    )
};

export default AuthContext;