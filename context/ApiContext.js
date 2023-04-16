import { createContext, useState } from "react";
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {   
 
  // load followers gifts
  const giftsoffollowings = async (userId) => {     
   
      const res = await fetch("/api/giftsoffollowings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ 'userid' : userId }),
      });

      const responsData = await res.json();      
      return responsData 
  }

  const giftdetail = async (giftId,userId) => {     
   
    const res = await fetch("/api/giftdetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ 'userid' : userId , 'giftid' : giftId}),
    });

    const responsData = await res.json();      
    return responsData

}

  return (
    <ApiContext.Provider value={{ giftsoffollowings , giftdetail}}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
