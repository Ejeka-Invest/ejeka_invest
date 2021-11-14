import React from "react";
import "./PortfolioItem.css";

function PortfolioItem({
  borderColor,
  name,
  returns,
  date_invested,
  maturity_date,
  amount,
}) {
  return (
    <div className={borderColor + " portfolio__item__detail"}>
      <div className="single_portfolio_item">
        <p>{name}</p>
        <p>Returns: {returns}</p>
      </div>
      <div className="single_portfolio_item">
        <p>Date Invested: {date_invested}</p>
        <p>Maturity Date: {maturity_date}</p>
      </div>
      <div className="single_portfolio_item">
        <p> Amount: {amount}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;
