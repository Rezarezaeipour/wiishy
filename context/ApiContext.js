import { createContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

  // load followers gifts
  const giftsoffollowings = async (userId) => {
      const req = async () => {
      const res = await fetch(
        `/api/giftsoffollowings/${userId}`
      );
      const responsData = await res.json();
      return responsData;
    };
  };

  return <ApiContext.Provider value={{giftsoffollowings}}></ApiContext.Provider>;
};

export default ApiContext;
