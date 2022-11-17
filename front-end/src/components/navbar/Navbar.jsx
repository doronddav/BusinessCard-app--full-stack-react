import { Link } from "react-router-dom";
import LogOut from "../logOut/LogOut";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import { ReactComponent as Logo } from "../../assets./logo.svg";

function Navbar() {
  const items = JSON.parse(localStorage.getItem("data"));

  const { isLogdeIn } = useContext(UserContext);
  console.log(isLogdeIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className=" ps-3 text-bg-dark navbar-brand" to="/">
        CooperationApp
      </Link>
      Navbar
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse pe-4 flex-row-reverse "
        id="#navbarNav"
      >
        <ul className="navbar-nav mr-auto">
          <li className=" nav-item active "></li>
          {isLogdeIn === false && (
            <>
              <li className=" px-1 nav-item">
                <Link to="/signup" className="text-decoration-none text-light">
                  Signup
                </Link>
              </li>
              <li className=" px-1 nav-item">
                <Link
                  to="/SignUpBusines"
                  className="text-decoration-none text-light"
                >
                  Sign Up Business
                </Link>
              </li>
              <li className="px-1 nav-item">
                <Link to="/signin" className="text-decoration-none text-light">
                  Log In
                </Link>
              </li>
            </>
          )}

          {items?.data.isBusinessAccount === true && (
            <>
              <li className=" px-1 nav-item">
                <Link
                  to="/customerPage"
                  className="text-decoration-none text-light "
                >
                  Customer Page
                </Link>
              </li>
              <li className="px-1 nav-item">
                <Link
                  to="/cards/create"
                  className="text-decoration-none text-light"
                >
                  Create Card
                </Link>
              </li>
              <li className="px-1 nav-item">
                <LogOut className="text-decoration-none text-light" />
              </li>
            </>
          )}

          {items?.data.isBusinessAccount === false && (
            <li className="px-1 nav-item">
              <LogOut className="text-decoration-none text-light" />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
