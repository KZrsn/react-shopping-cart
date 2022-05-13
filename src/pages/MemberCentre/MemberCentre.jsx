import React from 'react';
import FooterInfo from '../../components/Footer/FooterInfo';
import Header from '../../components/Header/Header';
import IMG from '../../images/Work time-amico.png';

const MemberCentre = ({cart}) => {
  return (
    <div className='MemberCentre'>
      <Header cart={cart} />
      <div className="context">
        <img src={IMG} alt="敬請期待" />
        <div className="text">
          <p>會員中心製作中</p>
          <p>敬請期待</p>
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}

export default MemberCentre;