import React, { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../utils/utils";
import { automaticLogin } from "../services/services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user && isAuthenticated()) {
      automaticLogin();
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
