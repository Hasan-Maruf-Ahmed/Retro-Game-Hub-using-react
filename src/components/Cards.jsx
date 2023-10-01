import React from "react";
import "./Cards.css"

export const Card = (props) => {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} className="card_img"/>
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <button className="card_btn">PLAY</button>
    </div>
  );
};
