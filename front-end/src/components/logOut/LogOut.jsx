import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./logOut.style.scss";

function LogOut() {
  const { setIsLogdeIn } = useContext(UserContext);
  const logOutUser = () => {
    localStorage.removeItem("data");
    setIsLogdeIn(false);
  };

  return (
    <Link to="/" className="logOutBtn" onClick={logOutUser}>
      Log Out
    </Link>
  );
}

export default LogOut;
