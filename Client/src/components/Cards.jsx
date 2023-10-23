import "./Cards.css"
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(props.link);
  }
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} className="card_img"/>
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <button className="card_btn" onClick={handleButtonClick} >PLAY</button>
    </div>
  );
};
