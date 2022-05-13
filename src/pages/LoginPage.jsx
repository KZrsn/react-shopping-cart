import React, { useEffect, useState } from 'react';
import FooterInfo from '../components/Footer/FooterInfo';
import Header from '../components/Header/Header';
import Login from '../components/Authentication/Login/Login';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LoginPage = ({ cart }) => {
  const history = useNavigate()

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    },[]
  );

  useEffect(() => { // 登入後網址輸入 /login 會自動轉跳到首頁
    if (user) {
      return history('/');
     }
  },[user]) // user一改變就行使

  return (
    <div className="LoginPage">
      <Header cart={cart} />
      <Login />
      <FooterInfo />
    </div>
  )
}

export default LoginPage;