// import RenderResult from "next/dist/server/render-result";
// import { createContext } from "react";
// import { useState,useEffect } from "react";
// import { useRouter } from 'next/router'


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const router = useRouter();
//   useEffect(()=> {
//     loginCheck ()
//   },[])
   
//   //Register
//   const registerUser = async (nUser) => { 
    
//     const response = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(nUser),
//     });
//     const responseData = await response.json();  
//     return(responseData)
   
//   };

//   //Login
//   const logIn = async (nUser) => { 
    
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(nUser),
//     });
//     const responseData = await response.json();  

//     if(responseData['state']=="ok"){
//         router.push('/profile/ChooseWay')
//     }
   
//   };

//   //LogOut
//   const logOut = async (nUser) => {
//     const response = await fetch("/api/logOut", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//       },
    
//     });
//     const responseData = await response.json();  

//     if(responseData['state']=="ok"){
//         router.push('/signIn')
//     }
//   }

//   //IsLoggedIn
//   const loginCheck = async () => {     
//     const response = await fetch("/api/loginCheck");
//     const responseData = await response.json();   
    
//   };

//   return (
//     <AuthContext.Provider value={{ registerUser,logIn,logOut,loginCheck }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
