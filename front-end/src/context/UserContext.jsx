import { createContext, useState } from "react";

//the acuale value you want to pass
export const UserContext = createContext({
  isLogdeIn: false,
  setIsLogdeIn: () => false,
  cardToUpdate: "",
  setCardToUpdate: () => "",
});

//provider is the Component
export const UserProvider = ({ children }) => {
  const [isLogdeIn, setIsLogdeIn] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState("");
  const value = {
    isLogdeIn,
    setIsLogdeIn,
    cardToUpdate,
    setCardToUpdate,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
