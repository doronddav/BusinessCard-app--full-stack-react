import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function LogOut() {
  const { isLogdeIn, setIsLogdeIn } = useContext(UserContext);
  const logOutUser = () => {
    localStorage.removeItem("data");
    setIsLogdeIn(false);
  };

  return (
    <Link to="/" onClick={logOutUser}>
      Log Out
    </Link>
  );
}

export default LogOut;
