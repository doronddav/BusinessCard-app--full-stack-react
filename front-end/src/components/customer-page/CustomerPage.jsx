import { useState, useEffect } from "react";
import { Row } from "reactstrap";
import Card from "../card/Card";

const CustomerPage = () => {
  const items = JSON.parse(localStorage.getItem("data"));
  const [allCards, setAllCards] = useState([]);
  // console.log(items.data.token);

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
        const res = await fetch(
          `http://localhost:8000/cards/getmycards`,
          requestOptions
        );
        const resJson = await res.json();
        const { userData } = resJson.data;
        setAllCards([...resJson.data.userCards]);
        // console.log(userData);

        console.log(allCards);
      } catch (err) {
        // console.log(err);
      }
    };
    getCards();
  }, [allCards]);

  return (
    <>
      {console.log(allCards)}
      <h4 className="pt-5  d-flex justify-content-center ">Your Cards:</h4>
      <div className="my-4 container text-center d-flex justify-content-center">
        <Row xs={4}>
          {allCards.map((card) => {
            return <Card key={card._id} card={card} />;
          })}
        </Row>
      </div>
    </>
  );
};

//   return (
//     { allCards.length ? ( <>
//       <h4 className="pt-5  d-flex justify-content-center ">Your Cards:</h4>
//       <div className="my-4 container text-center d-flex justify-content-center">
//         <Row xs={4}>
//           {allCards.map((card) => {
//             return <Card key={card._id} card={card} />;
//           })}
//         </Row>
//       </div>
//     </>) : ( <button>make your first business card</button>)}

//   );
// };

export default CustomerPage;
