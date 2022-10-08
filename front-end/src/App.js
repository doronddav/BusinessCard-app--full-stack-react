//import ReactDOM from "react-dom/client";
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

function App() {
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
