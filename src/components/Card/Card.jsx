import React from "react";
import { Link } from "react-router-dom";

const Card = ({item, addToCart}) => {
  const { image, alt, title, noDiscount, discount, path } = item;

  return (
    <div className="ProductCard">
      <img src={image} alt={alt} />
      <div>
        <span>{title}</span>
        <h4 className="noDiscount">${noDiscount}</h4>
        <h4 className="discount">${discount}</h4>
      </div>
      <div className="cardHover">
        <div className="detailed">
          <Link to={path}>
            <button>
              產品頁面
            </button>
          </Link>
          <button onClick={() => addToCart(item)}>加入購物車</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
