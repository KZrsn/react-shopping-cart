import React, { useState } from 'react';
import ice from '../ice';

const Category = () => {
  const [data, setData] = useState(ice);
  const filterResult = (e) => {
    const result = ice.filter((iceData) => {
      return iceData.classification === e;
    });
    setData(result);
  }
  return (
    <div className='Category'>
      <button onClick={() => setData(ice)}>全部種類</button>
      <button onClick={() => filterResult("popular")}>熱銷產品</button>
      <button onClick={() => filterResult("classic")}>經典口味</button>
      <button onClick={() => filterResult("fruit")}>新鮮水果</button>
    </div>
  )
}

export default Category;