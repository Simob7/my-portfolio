import React from "react";
import "./portfolio.scss";

const PortfolioList = ({ setSelected, active, id, title }) => {
  return (
    <li
      className={`portfolio-list ${active}`}
      id={id}
      onClick={() => setSelected(id)}>
      {title}
    </li>
  );
};

export default PortfolioList;
