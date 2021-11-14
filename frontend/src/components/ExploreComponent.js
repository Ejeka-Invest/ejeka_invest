import React from "react";
import "./ExploreComponent.css";
import cassava_farm from "../assets/cassava_farm.jpg";
function ExploreComponent() {
  return (
    <div className="explore__component">
      <img src={cassava_farm} alt="" srcset="" />
      <div className="explore__component__text">
        <h2 className="explore__component__text__title">
          <b>Cassava Farm</b>
        </h2>
        <p>
          Percentage on investment: <b>20%</b>
        </p>
        Maturity Duration: <b>6 months</b>
      </div>
      <div className="invest__btn">
        <button type="submit">Invest</button>
      </div>
    </div>
  );
}

export default ExploreComponent;
