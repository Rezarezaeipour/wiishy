import { createContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {



  // load followers gifts
  const giftsoffollowings = async (userId) => {
     
     const req = async () => {
      const res = await fetch("/api/giftsoffollowings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ 'userid' : userId }),
      });
      const responsData = await res.json(); 
      console.log(['kkll;',responsData])     
      return responsData;
    };    
    req();

  };
  return (
    <ApiContext.Provider value={{ giftsoffollowings }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
