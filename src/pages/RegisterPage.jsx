import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/Authentication/SignUp';
import FooterInfo from '../components/Footer/FooterInfo';
import Header from '../components/Header/Header';
import { auth } from '../utils/firebase';

const RegisterPage = ({ cart }) => {
  const history = useNavigate()

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    },[]
  );

  useEffect(() => { // 登入後網址輸入 /signUp 會自動轉跳到首頁
    if (user) {
      return history('/');
     }
  },[user]) // user一改變就行使

  return (
    <div className='RegisterPage'>
      <Header cart={cart}/>
      <SignUp />
      <FooterInfo />
    </div>
  )
}

export default RegisterPage;