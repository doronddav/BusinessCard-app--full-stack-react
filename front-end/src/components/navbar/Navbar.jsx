import { Link } from "react-router-dom";
import LogOut from "../logOut/LogOut";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { isLogdeIn } = useContext(UserContext);
  console.log(isLogdeIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className=" ps-3 text-bg-dark navbar-brand" to="/">
        Home
      </Link>
      Navbar
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className=" pe-4 flex-row-reverse collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active"></li>
          {isLogdeIn === false ? (
            <>
              <li className=" px-1 nav-item">
                <Link to="/signup">Signup</Link>
              </li>
              <li className=" px-1 nav-item">
                <Link to="/SignUpBusines">Sign Up Business</Link>
              </li>
            </>
          ) : (
            <>
              <li className=" px-1 nav-item">
                <Link to="/customerPage">Customer Page</Link>
              </li>
              <li className="px-1 nav-item">
                <Link to="/cards/create">Create Card</Link>
              </li>
            </>
          )}

          {isLogdeIn === false ? (
            <li className="px-1 nav-item">
              <Link to="/signin">Log In</Link>
            </li>
          ) : (
            <li className="px-1 nav-item">
              <LogOut />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
