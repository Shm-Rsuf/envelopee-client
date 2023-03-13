import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  //if context false
  if (!context) {
    throw new Error(
      "useAuthContext hook must be used inside the AuthContextProvider"
    );
  }

  return context;
};
