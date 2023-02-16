import { createContext, useState } from "react";

//the acuale value you want to pass
export const UserContext = createContext({
  isLogdeIn: false,
  setIsLogdeIn: () => false,
  cardToUpdate: "",
  setCardToUpdate: () => "",
  allCards: "",
  setAllCards: () => "",
});

//provider is the Component
export const UserProvider = ({ children }) => {
  const [isLogdeIn, setIsLogdeIn] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState("");
   const [allCards, setAllCards] = useState([]);
  const value = {
    isLogdeIn,
    setIsLogdeIn,
    cardToUpdate,
    setCardToUpdate,
    allCards,
    setAllCards
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
