import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const { isLogdeIn, setIsLogdeIn } = useContext(UserContext);

  const navigate = useNavigate();

  let seeCards = () => {
    isLogdeIn === true
      ? navigate("/usercompany")
      : alert("Only Members Can see Bussines Cards");
  };
  return (
    <div>
      <h3>Users Card</h3>
      <h5>Make Your Own Business Card</h5>
      <button onClick={seeCards}>See All Cards Memebers</button>
    </div>
  );
};

export default Home;
