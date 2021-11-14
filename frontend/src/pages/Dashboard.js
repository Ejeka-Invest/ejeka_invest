import React, { useState } from "react";
import "./Dashboard.css";
import SideNav from "../components/SideNav";
import InvestmentPortfolioCard from "../components/InvestmentPortfolioCard";
import { Link } from "react-router-dom";
import PortfolioItem from "../components/PortfolioItem";

function Dashboard() {
  const total_investment = 123;
  const no_of_investments = 4;
  const total_return = 1235;

  const someInvestmentData = [
    {
      name: "Cassava Farm",
      returns_on_investment: "20%",
      date_invested: "10-23-4",
      maturity_date: "10-23-4",
      amount: "31,000$",
    },
    {
      name: "Cassava",
      returns_on_investment: "10%",
      date_invested: "1-2-4",
      maturity_date: "10-2-4",
      amount: "60,000$",
    },
  ];

  //   const handleClick = (event) => event.target.classList.add("hide");

  const handleClick = (e) => {
    if (e.target.id == "active") {
      setActiveIsShowing(true);
      setMaturedIsShowing(false);
      setPastIsShowing(false);
      setAllIsShowing(false);

      return;
    }
    if (e.target.id == "matured") {
      setActiveIsShowing(false);
      setMaturedIsShowing(true);
      setPastIsShowing(false);
      setAllIsShowing(false);
    }
    if (e.target.id == "past") {
      setActiveIsShowing(false);
      setMaturedIsShowing(false);
      setPastIsShowing(true);
      setAllIsShowing(false);
    }
    if (e.target.id == "all") {
      setActiveIsShowing(false);
      setMaturedIsShowing(false);
      setPastIsShowing(false);
      setAllIsShowing(true);
    }
  };
  const [activeIsShowing, setActiveIsShowing] = useState(true);
  const [maturedIsShowing, setMaturedIsShowing] = useState(false);
  const [pastIsShowing, setPastIsShowing] = useState(false);
  const [allIsShowing, setAllIsShowing] = useState(false);

  return (
    <div className="dashboard">
      <SideNav target="dashboard" />
      <div className="main__dashboard">
        <h2>Mitchel Inaju</h2>
        <InvestmentPortfolioCard
          total_investment={total_investment}
          no_of_investments={no_of_investments}
          total_return={total_return}
        />
        <div>
          <div className="portfolio__details">
            <div className="single__detail">
              <h3
                id="active"
                className={
                  activeIsShowing
                    ? "target__click__active"
                    : "target__click__not__active"
                }
                onClick={handleClick}
              >
                Active
              </h3>
            </div>
            <div className="single__detail">
              <h3
                id="matured"
                className={
                  maturedIsShowing
                    ? "target__click__active"
                    : "target__click__not__active"
                }
                onClick={handleClick}
              >
                Matured
              </h3>
            </div>
            <div className="single__detail">
              <h3
                id="past"
                className={
                  pastIsShowing
                    ? "target__click__active"
                    : "target__click__not__active"
                }
                onClick={handleClick}
              >
                Past
              </h3>
            </div>
            <div className="single__detail">
              <h3
                id="all"
                className={
                  allIsShowing
                    ? "target__click__active"
                    : "target__click__not__active"
                }
                onClick={handleClick}
              >
                All
              </h3>
            </div>
          </div>
          <div className="portfolio__detail_show">
            <p className={activeIsShowing ? "active show" : "active hide"}>
              {someInvestmentData.map((data) => (
                <PortfolioItem
                  borderColor="purple"
                  name={data.name}
                  returns={data.returns_on_investment}
                  date_invested={data.date_invested}
                  maturity_date={data.maturity_date}
                  amount={data.amount}
                />
              ))}
            </p>
            <p className={maturedIsShowing ? "active show" : "active hide"}>
              {someInvestmentData.map((data) => (
                <PortfolioItem
                  borderColor="green"
                  name={data.name}
                  returns={data.returns_on_investment}
                  date_invested={data.date_invested}
                  maturity_date={data.maturity_date}
                  amount={data.amount}
                />
              ))}
            </p>
            <p className={pastIsShowing ? "active show" : "active hide"}>
              {someInvestmentData.map((data) => (
                <PortfolioItem
                  borderColor="red"
                  name={data.name}
                  returns={data.returns_on_investment}
                  date_invested={data.date_invested}
                  maturity_date={data.maturity_date}
                  amount={data.amount}
                />
              ))}
            </p>
            <p className={allIsShowing ? "active show" : "active hide"}>
              {someInvestmentData.map((data) => (
                <PortfolioItem
                  borderColor="blue"
                  name={data.name}
                  returns={data.returns_on_investment}
                  date_invested={data.date_invested}
                  maturity_date={data.maturity_date}
                  amount={data.amount}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
