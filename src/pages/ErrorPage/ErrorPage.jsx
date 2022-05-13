import React from 'react';
import { Link } from 'react-router-dom';
import FooterInfo from '../../components/Footer/FooterInfo';
import Header from '../../components/Header/Header';
import errorIMG from '../../images/404 error.png';

const ErrorPage = ({cart}) => {
  return (
    <div className='ErrorPage'>
      <Header cart={cart} />
      <div className="error">
        <img src={errorIMG} alt="您所搜尋的頁面不存在" />
        <h1 className='errorMessage'>您所搜尋的頁面不存在</h1>
        <Link to='/'>
          <button className='toHome'>
            回首頁
          </button>
        </Link>
      </div>
      <FooterInfo />
    </div>
  )
};

export default ErrorPage;