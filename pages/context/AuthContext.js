import RenderResult from "next/dist/server/render-result";
import { createContext } from "react";
import { useState,useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

   
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
  const logIn = async (args) => {
    const reponse = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(args),
    });
    const ResponseDT = await reponse.json();
    setRespp(ResponseDT)
  };

  //LogOut

  //IsLoggedIn

  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
