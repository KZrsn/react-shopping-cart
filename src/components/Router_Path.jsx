import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCart from "../pages/ShoppingCart";
import Choco from "../pages/ICE/Choco";
import Almond from "../pages/ICE/Almond";
import Vanilla from "../pages/ICE/Vanilla";
import Strawberry from "../pages/ICE/Strawberry";
import Coffee from "../pages/ICE/Coffee";
import Flower from "../pages/ICE/Flower";
import Guava from "../pages/ICE/Guava";
import Mango from "../pages/ICE/Mango";
import Milk from "../pages/ICE/Milk";
import Mint from "../pages/ICE/Mint";
import Nut from "../pages/ICE/Nut";
import Oreo from "../pages/ICE/Oreo";
import Peanut from "../pages/ICE/Peanut";
import Raspberry from "../pages/ICE/Raspberry";
import Matcha from "../pages/ICE/Matcha";
import Tea from "../pages/ICE/Tea";
import RegisterPage from "../pages/RegisterPage";
import MemberCentre from "../pages/MemberCentre/MemberCentre";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CheckOrder from "../pages/CheckOrder/CheckOrder";

function Router_Path() {
  // cart的localStorage
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));

  // 購物車
  const [cart, setCart] = useState(cartLocalStorage);

  // 每次刷新頁面重新加載cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 將商品加入購物車
  const addToCart = (product) => {
    if (cart.indexOf(product) !== -1) return;
    const exist = cart.find((x) => x.name === product.name);
    if (exist) {
      // 假如推車裡已經有商品
      setCart(
        cart.map((x) =>
          x.name === product.name ? { ...exist, amount: exist.amount + 1 } : x
        )
      );
    } else {
      // 假如推車沒商品
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage cart={cart} addToCart={addToCart} />}
          />
          <Route path="/about" element={<AboutPage cart={cart} />} />

          {/* 產品 */}
          <Route
            path="/product"
            element={<ProductPage cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/product/vanilla"
            element={<Vanilla cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/chocolate"
            element={<Choco cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/strawberry"
            element={<Strawberry cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/almond"
            element={<Almond cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/coffee"
            element={<Coffee cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/flower"
            element={<Flower cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/guava"
            element={<Guava cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/mango"
            element={<Mango cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/milk"
            element={<Milk cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/mint"
            element={<Mint cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/nut"
            element={<Nut cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/oreo"
            element={<Oreo cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/peanut"
            element={<Peanut cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/raspberry"
            element={<Raspberry cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/matcha"
            element={<Matcha cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/tea"
            element={<Tea cart={cart} setCart={setCart} />}
          />

          {/* 問與答 */}
          <Route path="/question" element={<QuestionPage cart={cart} />} />

          {/* 登入/註冊 */}
          <Route path="/login" element={<LoginPage cart={cart} />} />
          <Route path="/signUp" element={<RegisterPage cart={cart} />} />

          {/* 會員 */}
          <Route path="/memberCentre" element={<MemberCentre cart={cart} />} />
          <Route path="/checkOrder" element={<CheckOrder cart={cart} />} />

          {/* 購物車 */}
          <Route
            path="/shoppingCart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
          <Route path="*" element={<ErrorPage cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Router_Path;
