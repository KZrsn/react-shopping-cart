import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; 
import Header_login from '../Authentication/Header_login';
import { Nav } from 'react-bootstrap';

const Header = ({ cart }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  // 購物車數量總計
  const amountTotal = () => {
    let number = 0;
    cart.map((item) => (number += item.amount));
    setTotalAmount(number);
  }

  useEffect(() => {
    amountTotal();
  });

  return (
    <div className="Header">
      <Link to="/" id='homeTag'>Gelato</Link>
      <Nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "link")}>首頁</NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "link")}>關於</NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active" : "link")}>產品</NavLink>
        <NavLink
          to="/question"
          className={({ isActive }) => (isActive ? "active" : "link")}>問與答</NavLink>
        {/* 登入/註冊 */}
        <Header_login /> 
        <NavLink
          to="/shoppingCart"
          className={({ isActive }) => (isActive ? "active" : "link")}>
            <FaShoppingCart />
            <p>購物車</p>
            <span className='cartAmount'>{totalAmount}</span>
        </NavLink>
      </Nav>
    </div>
  )
}
 
export default Header;