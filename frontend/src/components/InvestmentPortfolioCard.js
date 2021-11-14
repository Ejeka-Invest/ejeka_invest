import React from "react";
import "./InvestmentPortfolioCard.css";

function InvestmentPortfolioCard({
  total_investment,
  no_of_investments,
  total_return,
}) {
  return (
    <div className="portfolio__card">
      <div className="portfolio__card__item">
        <h3>Total Investments</h3>
        <h1>{total_investment}</h1>
      </div>
      <div className="portfolio__card__item">
        <h3>No of Investments</h3>
        <h1>{no_of_investments}</h1>
      </div>
      <div className="portfolio__card__item">
        <h3>Total Returns</h3>
        <h1>{total_return}</h1>
      </div>
    </div>
  );
}

export default InvestmentPortfolioCard;
