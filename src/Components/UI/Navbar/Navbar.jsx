import React, { useContext } from "react";   
import AuthContext from "../../../Store/auth-context";

const Navbar = (props) => { 
  const ctx = useContext(AuthContext);
  return ( 
    <div className="font-sans font-semibold text-slate-600 text-lg">
      <nav className="w-screen h-16 flex justify-between items-center bg-cyan-400"> 
        <p className="px-5 text-xl">{props.title}</p> 
          <ul className="flex justify-between items-center w-1/3 px-5 cursor-pointer">
            {ctx.isLoggedIn && (
              <>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><button className="rounded-md py-1 px-4 border bg-slate-700 text-white my-2 mx-5" onClick={()=>ctx.onLog(!ctx.isLoggedIn)}>Logout</button></li>
              </>
            )}
          </ul>  
      </nav> 
    </div> 
  );
};

export default Navbar;
