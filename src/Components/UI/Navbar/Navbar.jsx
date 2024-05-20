import React from "react";  
import Button from "../Button/Button";

const Navbar = (props) => {
  const getLoginData = () =>{
    props.getLoginData(false);
  }
  return (
    <div className="font-sans font-semibold text-slate-600 text-lg">
      <nav className="w-screen h-16 flex justify-between items-center bg-cyan-400"> 
        <p className="px-5 text-xl">{props.title}</p>
        {
          props.page == 'home' && 
          <>
            <ul className="flex justify-between w-1/5 px-5 cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <Button className="rounded-md py-1 px-4 border bg-slate-700 text-white my-2 mx-5" onClick={getLoginData}>Log Out</Button>
          </>
        }
        
      </nav> 
    </div>
  );
};

export default Navbar;
