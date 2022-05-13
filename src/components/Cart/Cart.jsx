import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // 增加數量按鈕
  const amountChange = (product, d) => {
    const exist = cart.indexOf(product);
    const arr = cart;
    arr[exist].amount += d;

    if (arr[exist].amount === 0) arr[exist].amount = 1;
    setCart([...arr]);
  };

  // 移除商品
  const productRemove = (name) => {
    setCart(cart.filter((item) => item !== name));
    // 刪除localStorage裡的資料
    localStorage.setItem("cart",JSON.stringify(cart.filter((item) => item !== name)))
    priceTotal();
    amountTotal();
  };

  // 金額總計
  const priceTotal = () => {
    let number = 0;
    cart.map((item) => (number += item.amount * item.discount));
    setPrice(number);
  };

  // 商品數量總計
  const amountTotal = () => {
    let number = 0;
    cart.map((item) => (number += item.amount));
    setTotalAmount(number);
  };

  useEffect(() => {
    priceTotal();
    amountTotal();
  });

  return (
    <div className="Cart">
      <div className="cartInfo">
        <div className="title">
          <span className="name">商品名稱</span>
          <span className="sales">售價</span>
          <span className="amounts">數量</span>
          <span className="subTotal">小計</span>
        </div>
        <div className="list">
          {cart.length !== 0 ? ( // 假如購物車裡有商品
            <>
              {cart.map((product, idx) => { // 回傳商品
                return (
                  <div className="product" key={idx}>
                    <img className="img" src={product.image} alt={product.alt} />
                    <span className="title">
                      <Link to={product.path}>
                        {product.title}
                      </Link>
                    </span>
                    <span className="price">${product.discount}</span>
                    <div className="count">
                      <button onClick={() => amountChange(product, -1)}>
                        -
                      </button>
                      <span>{product.amount}</span>
                      <button onClick={() => amountChange(product, 1)}>
                        +
                      </button>
                    </div>
                    <span className="total">共${product.amount * product.discount}</span>
                    <button className="delete" onClick={() => productRemove(product)}>
                      <FaTrash />
                    </button>
                  </div>
                );
              })}
            </>
          ) : ( // 沒有商品則顯示...
            <div className="emptyCart">
              <span>購物車目前沒有任何商品</span>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="totalAmount">
        <span>共{totalAmount}件</span>
        <span>總金額${price}</span>
      </div>
      <div className="end">
        {cart.length !== 0 ? ( // 假如購物車裡有商品，出現結帳
          <>
            <Link to="/product">
              <button>繼續選購</button>
            </Link>
            <button className="checkout">結帳</button>
          </>
        ) : ( // 沒有商品，只出現繼續選購
          <Link to="/product">
            <button>繼續選購</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
