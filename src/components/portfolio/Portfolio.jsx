import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard";
import { portfolio } from "../../data";
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="section__name">
        <h2>Portfolio</h2>
      </div>

      <div className="container portfolio__container">
        <div className="portfolio__cards">
          {portfolio.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              img={portfolio.img}
              title={portfolio.title}
              desc={portfolio.desc}
              github={portfolio.github}
              liveDemo={portfolio.liveDemo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
