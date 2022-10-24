import { Row } from "reactstrap";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const [allCards, setAllCards] = useState([
    {
      businessName: "",
      businessDescription: "",
      businessAddress: "",
      businessPhone: "",
      businessImage: "",
    },
  ]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async (e) => {
    const requestOptions = {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await fetch("http://localhost:8000/cards", requestOptions);
      const resJson = await res.json();
      console.log(resJson.data.cards);
      setAllCards([...resJson.data.cards]);
      console.log(allCards);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="my-4 container text-center d-flex justify-content-center">
      <Row xs={4}>
        {allCards.map((card) => {
          return <Card card={card} />;
        })}
      </Row>
    </div>
  );
};

export default MainPage;
