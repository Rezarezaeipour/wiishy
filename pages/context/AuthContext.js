import RenderResult from "next/dist/server/render-result";
import { createContext } from "react";
import { useState,useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(()=> {
    loginCheck ()
  },[])
   
  //Register
  const registerUser = async (nUser) => { 
    
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nUser),
    });
    const responseData = await response.json();  
    return(responseData)
   
  };

  //Login
  const logIn = async (nUser) => { 
    
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nUser),
    });
    const responseData = await response.json();  
    console.log(responseData)
    return(responseData)
   
  };

  //LogOut
  const logOut = async (nUser) => {
    console.log('hiBye')
  }

  //IsLoggedIn
  const loginCheck = async () => {     
    const response = await fetch("/api/loginCheck");
    const responseData = await response.json();   
    
  };

  return (
    <AuthContext.Provider value={{ registerUser,logIn,logOut,loginCheck }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
