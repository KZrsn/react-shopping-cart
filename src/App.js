import React from "react";
import FooterInfo from "./components/Footer/FooterInfo.jsx";
import Header from "./components/Header/Header.jsx";
import  { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as   Router, Routes ,Route  } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCart from "./pages/ShoppingCart";
import Choco from "./pages/ICE/Choco";
import Almond from "./pages/ICE/Almond";
import Vanilla from "./pages/ICE/Vanilla";
import Strawberry from "./pages/ICE/Strawberry";
import Coffee from "./pages/ICE/Coffee";
import Flower from "./pages/ICE/Flower";
import Guava from "./pages/ICE/Guava";
import Mango from "./pages/ICE/Mango";
import Milk from "./pages/ICE/Milk";
import Mint from "./pages/ICE/Mint";
import Nut from "./pages/ICE/Nut";
import Oreo from "./pages/ICE/Oreo";
import Peanut from "./pages/ICE/Peanut";
import Raspberry from "./pages/ICE/Raspberry";
import Matcha from "./pages/ICE/Matcha";
import Tea from "./pages/ICE/Tea";
import RegisterPage from "./pages/RegisterPage";
import MemberCentre from "./pages/MemberCentre/MemberCentre";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CheckOrder from "./pages/CheckOrder/CheckOrder";
import UpButton from "./components/UpButton/UpButton.jsx";

function App () {
    // cart的localStorage
    const cartLocalStorage = JSON.parse(
      localStorage.getItem("cart") === null ? "[]" : localStorage.getItem("cart")
    );
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
        )
      } else {
        // 假如推車沒商品
        setCart([...cart, { ...product, amount: 1 }]);
      }
      alert('成功加入購物車');
    };
  
  return (
    <div className="App">
      <Router>
        <Header cart={cart} />

        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />

          {/* 產品 */}
          <Route path="/product" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/product/vanilla" element={<Vanilla cart={cart} setCart={setCart} />} />
          <Route path="/product/chocolate" element={<Choco cart={cart} setCart={setCart} />} />
          <Route path="/product/strawberry" element={<Strawberry cart={cart} setCart={setCart} />} />
          <Route path="/product/almond" element={<Almond cart={cart} setCart={setCart} />} />
          <Route path="/product/coffee" element={<Coffee cart={cart} setCart={setCart} />} />
          <Route path="/product/flower" element={<Flower cart={cart} setCart={setCart} />} />
          <Route path="/product/guava" element={<Guava cart={cart} setCart={setCart} />} />
          <Route path="/product/mango" element={<Mango cart={cart} setCart={setCart} />} />
          <Route path="/product/milk" element={<Milk cart={cart} setCart={setCart} />} />
          <Route path="/product/mint" element={<Mint cart={cart} setCart={setCart} />} />
          <Route path="/product/nut" element={<Nut cart={cart} setCart={setCart} />} />
          <Route path="/product/oreo" element={<Oreo cart={cart} setCart={setCart} />} />
          <Route path="/product/peanut" element={<Peanut cart={cart} setCart={setCart} />} />
          <Route path="/product/raspberry" element={<Raspberry cart={cart} setCart={setCart} />} />
          <Route path="/product/matcha" element={<Matcha cart={cart} setCart={setCart} />} />
          <Route path="/product/tea" element={<Tea cart={cart} setCart={setCart} />} />

          {/* 問與答 */}
          <Route path="/question" element={<QuestionPage />} />

          {/* 登入/註冊 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<RegisterPage />} />

          {/* 會員 */}
          <Route path="/memberCentre" element={<MemberCentre />} />
          <Route path="/checkOrder" element={<CheckOrder />} />

          {/* 購物車 */}
          <Route path="/shoppingCart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <FooterInfo />
        <UpButton />
      </Router>

    </div>
  );
}

export default App;
