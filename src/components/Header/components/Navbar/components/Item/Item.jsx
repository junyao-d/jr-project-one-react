import React from "react";
import "./Item.css";

const Item = ({ href, name }) => (
  <a className="item" href={href}>
    {name}
  </a>
);

export default Item;
