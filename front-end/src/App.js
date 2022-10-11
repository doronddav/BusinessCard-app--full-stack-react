import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import SignUp from "./components/signUp/SignUp";
import SignUpBusiness from "./components/SignUpBusiness";
import SignIn from "./components/SignIn";
import CreatCard from "./components/CreatCard";
import Home from "./components//home/Home";
import CustomerPage from "./components/CustomerPage";
import CompanyPage from "./components/UsersCompany/CompanyPage";
import UpdateCard from "./components/updateCardPage/UpdateCard";
import { UserContext } from "./context/UserContext";
import PageNotFound from "./components/page-not-found/PageNotFound";

function App() {
  const { setIsLogdeIn } = useContext(UserContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("data");
    if (loggedInUser) {
      setIsLogdeIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/SignUpBusines" element={<SignUpBusiness />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/cards/create" element={<CreatCard />} />
          <Route exact path="/customerPage" element={<CustomerPage />} />
          <Route exact path="/usercompany" element={<CompanyPage />} />
          <Route exact path="/update" element={<UpdateCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
