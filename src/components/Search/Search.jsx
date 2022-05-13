import React, { useState , useRef , useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../Card/Card";
import ice from "../../ice.json";
import IMG from "../../images/商品總覽.jpeg";

const Search = ({addToCart}) => {
  const [data, setData] = useState(ice);
  const [searchResult, setSearchResult] = useState("");

  // 搜尋欄
  const dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) =>
      // item[key].toString().includes(searchResult.toString()) // 搜尋所有東西(包括價錢、名稱)
      item.title.toString().includes(searchResult.toString()) // 只搜尋商品名稱
    );
  });

  // 分類按鈕
  const filterResult = (e) => {
    const result = ice.filter((iceData) => {
      return Object.keys(iceData).some(() =>
        iceData.classification.includes(e)
      );
    });
    setData(result);
    setSearchResult(""); // 按按鈕時會清除搜尋欄文字
  };

  // 分類按鈕點擊後自動下拉
  const scrollRef = useRef(null)
  const autoScroll = () => scrollRef.current.scrollIntoView()
  
  // 分類按鈕函式合併
  const classification_filter = (e) => {
    filterResult(e);
    autoScroll()
  }
    


  return (
    <div className="Search">
      <section className="left">
        <div className="img">
          <h3>商品總覽</h3>
          <img src={IMG} alt="商品總覽" />
        </div>
        <div className="button">
          <button
            onClick={() => {
              setData(ice);
              setSearchResult("");
              autoScroll()
            }}
          >
            全部種類
          </button>
          <button onClick={() => classification_filter("popular")}>熱銷產品</button>
          <button onClick={() => classification_filter("classic")}>經典口味</button>
          <button onClick={() => classification_filter("fruit")}>新鮮水果</button>
        </div>
      </section>

      <section className="right" ref={scrollRef}>
        <div className="search">
          {/* 搜尋欄 */}
          <div className="searchIcon">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            placeholder="搜尋 . . ."
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          />
        </div>
        <div className="result">
          {dataSearch.length !== 0 ? ( 
            <>
              {dataSearch.map((val, key) => {
                return (
                  // 商品
                  <div className="user" key={key}>
                    <Card
                      item={val}
                      addToCart={addToCart}
                    />
                  </div>
                );
              })}
            </>
          ) : ( // 假如搜尋不到結果就回傳無任何搜尋結果
              <span className="noResult">無任何搜尋結果</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
