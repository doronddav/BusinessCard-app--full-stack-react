import { useState, useEffect,useContext } from "react";
import { Row } from "reactstrap";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./customer-page.style.scss";

const CustomerPage = () => {
  const items = JSON.parse(localStorage.getItem("data"));
  // const { allCards, setAllCards } = useContext(UserContext);
  const [allCards, setAllCards ] = useState([]);
  const [loading, setLoading ] = useState(true);
  
  const handleDelete = async (card) => {


    const cardToDelete = card._id;
   
    const getUserData = JSON.parse(localStorage.getItem("data")).data;
    const { token } = getUserData;

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify(),
    };
    try {
      const response = await fetch(
        ` http://localhost:8000/cards/deleteone?cardid=${cardToDelete}`,
        requestOptions
      );
        
    //  setAllCards(allCards.filter(card => card.id !== cardToDelete))
    } catch (err) {
    
    }
   

  };
  const del = (c)=>{
   
     let ac = [...allCards];
     ac = ac.filter(card => card._id !== c._id);
     setAllCards(ac);
     handleDelete(c)
  }
 
  const navigate = useNavigate();
  

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
     
        //const { userData } = resJson.data;
        setAllCards(resJson.data.userCards);
        
        setLoading(false)

   
      } catch (err) {
        
      }
    };
    getCards();
    
  }, []);

 


  let cardMapModel = (num) => {
    return (
      <Row xs={num}>
        
        {allCards.map((card) => (
       
           <Card handleDelete={handleDelete} key={card._id} card={card} del={del}  />
       
        ))}
      </Row>
    );
  };
  

  
  return (
    <>

      {loading && <img src="https://sfmarketingcloudhome.files.wordpress.com/2020/03/slds_spinner_brand.gif?w=184"/>  }

      <div className="container ">
        {!loading  && allCards.length===0 ?
          navigate("/cards/create")
          :
          <div>
            <h4 className="pt-5  d-flex justify-content-center ">
              Your Cards:
            </h4>
            <div className="my-4 container text-center d-flex justify-content-center">
              {allCards.length < 4 ? cardMapModel(3) : cardMapModel(4)}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default CustomerPage;
