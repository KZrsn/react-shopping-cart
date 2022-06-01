import React from 'react';
import IMG from '../../images/Work time-amico.png';

const CheckOrder = () => {
  return (
    <div className='CheckOrder'>
      <div className="context">
        <img src={IMG} alt="敬請期待" />
        <div className="text">
          <p>訂單查詢製作中</p>
          <p>敬請期待</p>
        </div>
      </div>
    </div>
  )
}

export default CheckOrder;