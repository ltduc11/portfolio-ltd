import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard";
const Portfolio = () => {
  const dataPortfolio = [
    {
      id: 1,
      img: "https://www.w3schools.com/howto/img_forest.jpg",
      title: "My Portfolio 1",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
      github: "http://google.com",
      liveDemo: "http://google.com",
    },
    {
      id: 2,
      img: "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      title: "My Portfolio 2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
      github: "http://google.com",
      liveDemo: "http://google.com",
    },
    {
      id: 3,
      img: "https://png.pngtree.com/illustrations/20190327/ourmid/pngtree-cure-starry-sky-night-sky-star-png-image_38228.jpg",
      title: "My Portfolio 3",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
      github: "http://google.com",
      liveDemo: "http://google.com",
    },
  ];

  return (
    <div id="portfolio">
      <div className="section__name">
        <h2>Portfolio</h2>
      </div>

      <div className="container portfolio__container">
        <div className="portfolio__cards">
          {dataPortfolio.map((portfolio) => (
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
