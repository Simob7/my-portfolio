import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// ==============================
import {
  featuredPortfolio,
  webPortfolio,
  seoPortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
// ========================================
const list = [
  {
    id: "web",
    title: "web app",
  },
  {
    id: "featured",
    title: "featured",
  },
  {
    id: "seo",
    title: "seo",
  },
  {
    id: "design",
    title: "design",
  },
  {
    id: "content",
    title: "content",
  },
];
// ==========================================

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "seo":
        setData(seoPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="specialHeader">portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            active={selected === item.id ? "active" : null}
            setSelected={setSelected}
            id={item.id}
            title={item.title}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item, idx) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
