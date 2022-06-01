import React, { useState } from 'react';
import BreadList from '../BreadList';

const Product_Info = ({ ice, cart, setCart, img }) => {
  const options = [ // 商品數量下拉式選單
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },{
      label: 4,
      value: 4,
    },
    {
      label: 5,
      value: 5,
    },
    {
      label: 6,
      value: 6,
    },
    {
      label: 7,
      value: 7,
    },
    {
      label: 8,
      value: 8,
    },
    {
      label: 9,
      value: 9,
    },
    {
      label: 10,
      value: 10,
    }
  ];

  // 商品資訊
  const { name, alt, title, noDiscount, discount } = ice[0];

  const [value, setValue] = useState(1);

  // 商品數量下拉式選單-選擇值
  const valueChange = (e) => {
    setValue(Number(e.target.value));
  }
  
  // 新增至購物車
  const addToCart = () => {
    if (cart.indexOf(ice[0]) !== -1) return;
    const exist = cart.find((x) => x.name === name);
    if (exist) { // 假如推車裡已經有商品
      setCart(cart.map((x) =>
        x.name === name ? { ...exist, amount: exist.amount + value } : x
      ));
    } else { // 假如推車沒商品
      setCart([...cart, { ...ice[0], amount: value }]);
    }
    alert('成功加入購物車');
  }

  return (
    <div className='Product_Info'>
      <div className="iceInfo">
        <section className='img'>
          <BreadList n={ice}/>
          <img src={img} alt={alt} />
        </section>
        <section className='information'>
          <h1>{title}</h1>
          <hr />
          <h4>產品描述:</h4>
          <h5>此區域為{title}的產品描述，下略...... 義式冰淇淋是一種源自於義大利的甜點，是歐洲冰淇淋唯一的分類；以它的多種口味、手工製作跟營養價值聞名。與美式冰淇淋之不同處極多，不論是成分、製造過程、口味種類、營養價值跟質感都有差異；義式冰淇淋不使用人工香精或甜味劑，強調其天然製程，牛奶和鮮奶油含量比美式冰淇淋低、水果含量比美式冰淇淋高。</h5>
          <div className="price">
            <h3>原價{noDiscount}</h3>
            <h2>特價{discount}</h2>
          </div>
          <div className="order">
            <span>購買數量</span>
            <select value={value} onChange={valueChange}>
              {options.map((option,key) => ( // 商品數量下拉式選單1-10
                <option value={option.value} key={key}>{option.label}</option>
              ))}
            </select>
            <button className='cart' onClick={() => addToCart()}>+ 加入購物車</button>
          </div>
        </section>
      </div>  
    </div>
  )
}

export default Product_Info;