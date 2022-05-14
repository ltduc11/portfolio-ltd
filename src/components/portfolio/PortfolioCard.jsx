import React from "react";

const PortfolioCard = ({ img, title, desc, github, liveDemo }) => {
  // const p = {
  //   id: 1,
  //   img: "https://www.w3schools.com/howto/img_forest.jpg",
  //   title: "My Portfolio 1",
  //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
  //   github: "http://google.com",
  //   live: "http://google.com",
  // };

  return (
    <div className="portfolio__card">
      <div className="portfolio__card-img">
        <img src={img} alt={title} />
      </div>
      <div className="portfolio__card-content">
        <div className="portfolio__card-information">
          <div className="portfolio__card-title">
            <h2>{title}</h2>
          </div>

          <div className="portfolio__card-desc">
            <h5>{desc}</h5>
          </div>
        </div>
        <div className="portfolio__card-btn">
          <a href={github} className="btn" target="_blank" rel="noreferrer">
            Github
          </a>
          <a
            href={liveDemo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
