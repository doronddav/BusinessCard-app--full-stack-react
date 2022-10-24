import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaLongArrowAltDown } from "react-icons/fa";
import Button from "../button/button";
import Card from "../card/Card";

import "./home.style.scss";

const Home = () => {
  //see alll cards
  const [allCards, setAllCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: items.data.token,
        },
      };

      try {
        const res = await fetch(`http://localhost:8000/cards`, requestOptions);
        const resJson = await res.json();
        console.log(resJson);
        setAllCards([...resJson.data.userCards]);
        //console.log(allCards);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, []);

  //
  const { isLogdeIn, setIsLogdeIn } = useContext(UserContext);
  const items = JSON.parse(localStorage.getItem("data"));
  console.log(items);

  const navigate = useNavigate();
  const localBusinessCard = {
    businessName: "Doron WebDesigner",
    businessDescription:
      "Making Web just for you! Your Dreame page is Phone call from you",
    businessAddress: "herzliya",
    businessPhone: "0504082331",
    businessImage:
      "https://www.exovia.de/wp-content/uploads/2021/06/was-ist-webdesign-1024x538.jpg",
  };
  let seeCards = () => {
    isLogdeIn === true
      ? navigate("/usercompany")
      : alert("Only Members Can see Bussines Cards");
  };

  let goToSignInMumber = () => {
    navigate("/SignUpBusines");
  };
  return (
    <div className="container">
      <h3>Users Card</h3>
      {isLogdeIn === true && items?.data.isBusinessAccount === true ? (
        <>
          <h5>HELLO {items.data.name.toUpperCase()}</h5>
          <p>Now you can see other business to make cooperation with.</p>
          <div>
            <FaLongArrowAltDown className="svg" />
          </div>
          {<Button onClick={seeCards}> See All Cards Memebers</Button>}
        </>
      ) : (
        <>
          <h5>Become bussiness and Make Your Own Business Card</h5>
          <div className="displayCard">
            <Card card={localBusinessCard} />
          </div>
          {
            <Button onClick={goToSignInMumber}>
              {" "}
              Become a Business account
            </Button>
          }
        </>
      )}
    </div>
  );
};

export default Home;
